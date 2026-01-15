import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookCard from '@/components/BookCard';
import { getBooksByTestament, BibleBook } from '@/data/bible-books';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

const Books: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('old');

  const oldTestament = getBooksByTestament('old');
  const newTestament = getBooksByTestament('new');

  const filterBooks = (books: BibleBook[]) => {
    if (!search.trim()) return books;
    return books.filter(book =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.abbreviation.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleBookSelect = (bookId: string) => {
    navigate(`/quiz-setup/${bookId}`);
  };

  const renderBookList = (books: BibleBook[]) => {
    const filtered = filterBooks(books);
    
    // Group by category
    const grouped = filtered.reduce((acc, book) => {
      if (!acc[book.category]) {
        acc[book.category] = [];
      }
      acc[book.category].push(book);
      return acc;
    }, {} as Record<string, BibleBook[]>);

    if (Object.keys(grouped).length === 0) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <p>No books found matching "{search}"</p>
        </div>
      );
    }

    let globalIndex = 0;

    return (
      <div className="space-y-6">
        {Object.entries(grouped).map(([category, categoryBooks]) => (
          <div key={category} className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
              {category}
            </h3>
            <div className="space-y-2">
              {categoryBooks.map((book) => {
                const index = globalIndex++;
                return (
                  <BookCard
                    key={book.id}
                    book={book}
                    onClick={() => handleBookSelect(book.id)}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      {/* Header */}
      <div className="safe-top px-5 pt-4 pb-4 space-y-4">
        <h1 className={cn(
          'font-display text-2xl font-bold text-foreground text-center',
          settings.animationsEnabled && 'animate-fade-in'
        )}>
          Choose a Book
        </h1>

        {/* Search */}
        <div className={cn(
          'relative',
          settings.animationsEnabled && 'animate-slide-up'
        )}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 h-12 rounded-xl bg-card border-border"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as 'old' | 'new')}
          className="w-full"
        >
          <TabsList className={cn(
            'grid w-full grid-cols-2 h-12 rounded-xl bg-secondary p-1',
            settings.animationsEnabled && 'animate-scale-in'
          )}>
            <TabsTrigger
              value="old"
              className="rounded-lg font-display font-semibold data-[state=active]:gold-gradient data-[state=active]:text-primary-foreground"
            >
              Old Testament
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="rounded-lg font-display font-semibold data-[state=active]:gold-gradient data-[state=active]:text-primary-foreground"
            >
              New Testament
            </TabsTrigger>
          </TabsList>

          <TabsContent value="old" className="mt-6">
            {renderBookList(oldTestament)}
          </TabsContent>

          <TabsContent value="new" className="mt-6">
            {renderBookList(newTestament)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
