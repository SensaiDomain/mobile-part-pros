import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "iPhone 15 Screen Replacement Guide: Step by Step",
      excerpt: "Complete tutorial on replacing iPhone 15 displays with our premium parts. Includes tools needed and troubleshooting tips.",
      category: "Repair Guides",
      author: "Mike Johnson",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "How to Extend Your Phone Battery Life: Pro Tips",
      excerpt: "Learn professional techniques to maximize battery performance and identify when it's time for a replacement.",
      category: "Maintenance",
      author: "Sarah Chen",
      date: "Jan 12, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Samsung Galaxy S24 Parts: What's New",
      excerpt: "Detailed breakdown of the latest Samsung flagship components and repair considerations for technicians.",
      category: "News",
      author: "David Park",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Expert Insights
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest repair techniques, device releases, 
            and maintenance tips from our expert team.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`hover-lift group cursor-pointer ${post.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <CardContent className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{post.category}</Badge>
                  {post.featured && (
                    <Badge className="bg-accent">Featured</Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className={`font-semibold group-hover:text-primary transition-colors ${post.featured ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;