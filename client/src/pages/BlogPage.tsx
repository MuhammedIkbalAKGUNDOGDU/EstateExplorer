import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const { t, i18n } = useTranslation();

  const getTitle = (post: (typeof blogPosts)[0]) => {
    switch (i18n.language) {
      case "tr":
        return post.title_tr;
      case "ar":
        return post.title_ar;
      default:
        return post.title_en;
    }
  };

  const getExcerpt = (post: (typeof blogPosts)[0]) => {
    switch (i18n.language) {
      case "tr":
        return post.excerpt_tr;
      case "ar":
        return post.excerpt_ar;
      default:
        return post.excerpt_en;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("blog.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <Card className="group hover-elevate transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={getTitle(post)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {post.readTime} {t("blog.readTime")}
                        </span>
                      </div>
                    </div>

                    <Badge variant="secondary" className="mb-3">
                      {t(`blog.categoriesList.${post.category}`)}
                    </Badge>

                    <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                      {getTitle(post)}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {getExcerpt(post)}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors">
                        {t("blog.readMore")}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
