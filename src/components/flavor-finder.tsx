'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recommendFlavor, type FlavorRecommendationOutput } from '@/ai/flows/flavor-recommendation';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  preferences: z.string().min(10, 'Please describe your preferences in a bit more detail.'),
});

type FormData = z.infer<typeof formSchema>;

export function FlavorFinder() {
  const [recommendation, setRecommendation] = useState<FlavorRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await recommendFlavor(data);
      setRecommendation(result);
    } catch (error) {
      console.error('Error getting flavor recommendation:', error);
      toast({
        variant: "destructive",
        title: "Oh no! The Flavor Genius is stumped.",
        description: "We couldn't get a recommendation right now. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            Describe Your Cravings
          </CardTitle>
          <CardDescription>
            Tell us about flavors you love, textures you enjoy, or even your current mood. The more detail, the better!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Flavor Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I love fruity and sweet flavors, but not too sour. Something with a creamy texture would be great. I'm a big fan of berries and maybe something tropical.'"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 rounded-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-5 w-5" />
                )}
                Find My Flavor
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center mt-8">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary"/>
            <p className="mt-2 text-muted-foreground">Our Genius is thinking...</p>
        </div>
      )}

      {recommendation && (
        <div className="mt-8 animate-in fade-in duration-500">
          <Card className="border-primary border-2 shadow-xl">
            <CardHeader>
                <CardDescription className="font-semibold text-primary">YOUR PERFECT SCOOP</CardDescription>
              <CardTitle className="text-3xl font-headline">{recommendation.recommendation}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-bold text-lg">Why you'll love it:</h3>
              <p className="text-muted-foreground text-base">{recommendation.reasoning}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
