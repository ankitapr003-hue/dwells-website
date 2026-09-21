import { useEffect } from "react";

const SEO = ({
  title = "DWELLS | Raw Materials & Construction Products",

  description =
    "DWELLS supplies quality raw materials and construction products for residential, commercial and infrastructure projects.",

  keywords =
    "DWELLS, raw materials supplier, construction materials, building materials, construction products, cement, TMT steel, sand, aggregates, bricks, blocks, tiles",

  image = "/dwells-logo.png",

  url = "https://www.dwells.in/",
}) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (attribute, key, content) => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const absoluteImageUrl = new URL(
      image,
      url
    ).href;

    /* BASIC SEO */

    setMetaTag(
      "name",
      "description",
      description
    );

    setMetaTag(
      "name",
      "keywords",
      keywords
    );

    setMetaTag(
      "name",
      "author",
      "DWELLS"
    );

    setMetaTag(
      "name",
      "robots",
      "index, follow"
    );

    /* OPEN GRAPH */

    setMetaTag(
      "property",
      "og:title",
      title
    );

    setMetaTag(
      "property",
      "og:description",
      description
    );

    setMetaTag(
      "property",
      "og:image",
      absoluteImageUrl
    );

    setMetaTag(
      "property",
      "og:url",
      url
    );

    setMetaTag(
      "property",
      "og:type",
      "website"
    );

    setMetaTag(
      "property",
      "og:site_name",
      "DWELLS"
    );

    /* TWITTER */

    setMetaTag(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMetaTag(
      "name",
      "twitter:title",
      title
    );

    setMetaTag(
      "name",
      "twitter:description",
      description
    );

    setMetaTag(
      "name",
      "twitter:image",
      absoluteImageUrl
    );

    /* CANONICAL */

    let canonical =
      document.head.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical = document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      url
    );

    /* STRUCTURED DATA */

    const existingSchema =
      document.head.querySelector(
        'script[data-seo="dwells-schema"]'
      );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema =
      document.createElement("script");

    schema.type =
      "application/ld+json";

    schema.setAttribute(
      "data-seo",
      "dwells-schema"
    );

    const structuredData = {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "Organization",

          "@id":
            "https://www.dwells.in/#organization",

          name: "DWELLS",

          url:
            "https://www.dwells.in/",

          logo:
            "https://www.dwells.in/dwells-logo.png",

          description:
            "DWELLS supplies raw materials and construction products for residential, commercial and infrastructure projects.",
        },

        {
          "@type": "WebSite",

          "@id":
            "https://www.dwells.in/#website",

          url:
            "https://www.dwells.in/",

          name: "DWELLS",

          description:
            "Raw materials and construction products supplier.",

          publisher: {
            "@id":
              "https://www.dwells.in/#organization",
          },
        },
      ],
    };

    schema.textContent =
      JSON.stringify(structuredData);

    document.head.appendChild(
      schema
    );

    return () => {
      const schemaToRemove =
        document.head.querySelector(
          'script[data-seo="dwells-schema"]'
        );

      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
  ]);

  return null;
};

export default SEO;