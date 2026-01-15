import { useCallback, useRef, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';

type SoundType = 'tap' | 'correct' | 'wrong' | 'complete' | 'streak' | 'select';

interface AudioContextRef {
  context: AudioContext | null;
  gainNode: GainNode | null;
}

// Sound generation parameters for each type
const soundConfigs: Record<SoundType, {
  frequency: number;
  type: OscillatorType;
  duration: number;
  gainStart: number;
  gainEnd: number;
  frequencyEnd?: number;
  secondOsc?: { frequency: number; type: OscillatorType; delay: number };
  thirdOsc?: { frequency: number; type: OscillatorType; delay: number };
}> = {
  tap: {
    frequency: 600,
    type: 'sine',
    duration: 0.08,
    gainStart: 0.15,
    gainEnd: 0,
    frequencyEnd: 400,
  },
  select: {
    frequency: 800,
    type: 'sine',
    duration: 0.1,
    gainStart: 0.12,
    gainEnd: 0,
    frequencyEnd: 600,
  },
  correct: {
    frequency: 523.25, // C5
    type: 'sine',
    duration: 0.35,
    gainStart: 0.25,
    gainEnd: 0,
    secondOsc: { frequency: 659.25, type: 'sine', delay: 0.08 }, // E5
    thirdOsc: { frequency: 783.99, type: 'sine', delay: 0.16 }, // G5
  },
  wrong: {
    frequency: 220,
    type: 'sawtooth',
    duration: 0.3,
    gainStart: 0.2,
    gainEnd: 0,
    frequencyEnd: 110,
  },
  complete: {
    frequency: 440, // A4
    type: 'sine',
    duration: 0.5,
    gainStart: 0.3,
    gainEnd: 0,
    secondOsc: { frequency: 554.37, type: 'sine', delay: 0.1 }, // C#5
    thirdOsc: { frequency: 659.25, type: 'sine', delay: 0.2 }, // E5
  },
  streak: {
    frequency: 880,
    type: 'sine',
    duration: 0.4,
    gainStart: 0.25,
    gainEnd: 0,
    frequencyEnd: 1320,
  },
};

export const useSoundEffects = () => {
  const { settings } = useApp();
  const audioRef = useRef<AudioContextRef>({ context: null, gainNode: null });

  // Initialize audio context on first interaction
  const initAudio = useCallback(() => {
    if (!audioRef.current.context) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        const context = new AudioContextClass();
        const gainNode = context.createGain();
        gainNode.connect(context.destination);
        audioRef.current = { context, gainNode };
      }
    }
    
    // Resume if suspended
    if (audioRef.current.context?.state === 'suspended') {
      audioRef.current.context.resume();
    }
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current.context) {
        audioRef.current.context.close();
      }
    };
  }, []);

  const playSound = useCallback((type: SoundType) => {
    if (!settings.soundEnabled) return;
    
    initAudio();
    
    const { context, gainNode } = audioRef.current;
    if (!context || !gainNode) return;

    const config = soundConfigs[type];
    const now = context.currentTime;

    // Create main oscillator
    const createOscillator = (freq: number, oscType: OscillatorType, startTime: number) => {
      const oscillator = context.createOscillator();
      const oscGain = context.createGain();
      
      oscillator.type = oscType;
      oscillator.frequency.setValueAtTime(freq, startTime);
      
      if (config.frequencyEnd) {
        oscillator.frequency.exponentialRampToValueAtTime(
          config.frequencyEnd,
          startTime + config.duration
        );
      }
      
      oscGain.gain.setValueAtTime(config.gainStart, startTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, startTime + config.duration);
      
      oscillator.connect(oscGain);
      oscGain.connect(gainNode);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + config.duration);
    };

    // Main oscillator
    createOscillator(config.frequency, config.type, now);

    // Second oscillator (for chords)
    if (config.secondOsc) {
      createOscillator(config.secondOsc.frequency, config.secondOsc.type, now + config.secondOsc.delay);
    }

    // Third oscillator (for chords)
    if (config.thirdOsc) {
      createOscillator(config.thirdOsc.frequency, config.thirdOsc.type, now + config.thirdOsc.delay);
    }
  }, [settings.soundEnabled, initAudio]);

  const playTap = useCallback(() => playSound('tap'), [playSound]);
  const playSelect = useCallback(() => playSound('select'), [playSound]);
  const playCorrect = useCallback(() => playSound('correct'), [playSound]);
  const playWrong = useCallback(() => playSound('wrong'), [playSound]);
  const playComplete = useCallback(() => playSound('complete'), [playSound]);
  const playStreak = useCallback(() => playSound('streak'), [playSound]);

  return {
    playSound,
    playTap,
    playSelect,
    playCorrect,
    playWrong,
    playComplete,
    playStreak,
  };
};
