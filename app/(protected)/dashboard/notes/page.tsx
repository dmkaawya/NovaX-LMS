'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function NotesPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Physics - Newton&apos;s Laws',
      date: '2024-12-15',
      content: 'First law: An object at rest stays at rest...',
      category: 'Physics',
    },
    {
      id: 2,
      title: 'Chemistry - Periodic Table',
      date: '2024-12-14',
      content: 'Elements are organized by atomic number...',
      category: 'Chemistry',
    },
  ]);

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-muted-foreground mt-2">Organize and review your study notes.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background"
          />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <Card key={note.id} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{note.title}</h3>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{note.date}</p>
            <p className="text-sm mb-3 line-clamp-3">{note.content}</p>
            <div className="flex gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {note.category}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                Edit
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
