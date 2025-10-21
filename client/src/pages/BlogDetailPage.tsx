import { useParams, Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { blogPosts } from "@/blogData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogDetailPage() {
  const params = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTitle = () => {
    switch (i18n.language) {
      case "tr":
        return post.title_tr;
      case "ar":
        return post.title_ar;
      default:
        return post.title_en;
    }
  };

  const getContent = () => {
    switch (i18n.language) {
      case "tr":
        return post.content_tr;
      case "ar":
        return post.content_ar;
      default:
        return post.content_en;
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

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("blog.backToBlog")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              {t(`blog.categoriesList.${post.category}`)}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {getTitle()}
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>
                  {post.readTime} {t("blog.readTime")}
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              {t("blog.share")}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src={post.imageUrl}
              alt={getTitle()}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: getContent() }}
              className="text-muted-foreground leading-relaxed"
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">{t("blog.tags")}</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("blog.relatedPosts")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover-elevate transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={getTitle()}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {t(`blog.categoriesList.${relatedPost.category}`)}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {getTitle()}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(relatedPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {relatedPost.readTime} {t("blog.readTime")}
                        </span>
                      </div>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" className="w-full">
                        {t("blog.readMore")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
