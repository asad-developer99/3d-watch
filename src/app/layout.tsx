import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewatch.60fps.fr"),
  title: "FS 60P - The timeless automatic watch by 60fps",
  description: "FS 60P - The timeless automatic watch by 60fps",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "FS 60P - The timeless automatic watch by 60fps",
    description: "FS 60P - The timeless automatic watch by 60fps",
    images: ["/share-image.webp"],
    url: "https://thewatch.60fps.fr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FS 60P - The timeless automatic watch by 60fps",
    images: ["/share-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="stylesheet" href="/assets/index-DSKOTUpi.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #loader {
                position: fixed;
                inset: 0;
                background: #EBEBEB;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: all;
              }
              #loader svg {
                position: absolute;
                inset: -100%;
                margin: auto;
                max-width: 95%;
                max-height: 95%;
                min-width: 500px;
              }
              #loader div {
                font-size: 11px;
                color: #000;
                font-family: 'Inter', sans-serif;
              }
              #loader div span {
                color: #0006;
              }
              @media (min-width: 1024px) {
                #loader svg {
                  max-width: 80%;
                  max-height: 80%;
                }
                #loader div {
                  font-size: .8333333333vw;
                }
              }

              .progress-arc {
                transform: rotate(-180deg) scale(-1, 1);
                transform-origin: center;
                stroke-dasharray: 2168;
                stroke-dashoffset: 2168;
                animation: fill-circle 1.2s ease-in-out forwards;
              }

              @keyframes fill-circle {
                from { stroke-dashoffset: 2168; }
                to   { stroke-dashoffset: 0; }
              }
            `,
          }}
        />
        <script type="module" crossOrigin="" src="/assets/index-Ck-pEZ8v.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
