'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, BarChart3 } from 'lucide-react';

export default function QuizzesPage() {
  const quizzes = [
    {
      id: 1,
      title: 'Physics Basics Quiz',
      score: 85,
      total: 100,
      completed: true,
      date: '2024-12-15',
      duration: '30 minutes',
    },
    {
      id: 2,
      title: 'Chemistry Reactions Quiz',
      score: null,
      total: 100,
      completed: false,
      date: 'Not started',
      duration: '45 minutes',
    },
    {
      id: 3,
      title: 'Advanced Math Quiz',
      score: 92,
      total: 100,
      completed: true,
      date: '2024-12-10',
      duration: '1 hour',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground mt-2">Test your knowledge with interactive quizzes.</p>
      </div>

      <div className="grid gap-4">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{quiz.title}</h3>
                <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {quiz.duration}
                  </div>
                  <div>{quiz.date}</div>
                </div>
              </div>
              {quiz.completed && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="text-right">
                    <p className="font-bold text-lg">{quiz.score}%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <Button className="w-full">
                {quiz.completed ? 'Review' : 'Start Quiz'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
