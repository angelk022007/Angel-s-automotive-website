import { Article } from '../types';

export function updatePageSEO(title: string, description: string, url: string, ogType: string = 'website', article?: Article) {
  // 1. Document title
  document.title = title;

  // 2. Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. OpenGraph Tags
  const setMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const setTwitter = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('og:title', title);
  setMeta('og:description', description);
  setMeta('og:url', url);
  setMeta('og:type', ogType);

  setTwitter('twitter:title', title);
  setTwitter('twitter:description', description);

  // 4. Canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  // 5. Dynamic Article JSON-LD Schema
  let schemaScript = document.getElementById('article-schema-ld');
  if (article) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'article-schema-ld';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": article.title,
      "description": article.subtitle || article.excerpt,
      "image": [article.heroImage],
      "datePublished": new Date(article.publishedAt).toISOString() || article.publishedAt,
      "author": {
        "@type": "Person",
        "name": article.author.name,
        "jobTitle": article.author.role
      },
      "publisher": {
        "@type": "Organization",
        "name": "Motor Chronicles",
        "logo": {
          "@type": "ImageObject",
          "url": "https://motorchronicles.com/logo.png"
        }
      },
      "articleSection": article.categoryLabel,
      "keywords": article.tags.join(', ')
    };

    schemaScript.textContent = JSON.stringify(articleSchema, null, 2);
  } else if (schemaScript) {
    schemaScript.remove();
  }
}
