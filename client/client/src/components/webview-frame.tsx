"use client";

import { useState, useRef, useLayoutEffect } from 'react';
import { Loader2, RefreshCw, Info, Expand, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardHeader } from '@/components/ui/card';

interface WebviewFrameProps {
  url: string;
}

const DESKTOP_WIDTH = 1280;

export function WebviewFrame({ url }: WebviewFrameProps) {
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(Date.now());
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRefresh = () => {
    setLoading(true);
    setIframeKey(Date.now());
  };

  const handleInfo = () => {
    window.open('https://nikhildath.github.io/aquaclima', '_blank');
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  useLayoutEffect(() => {
    const calculateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const newScale = containerWidth / DESKTOP_WIDTH;
        setScale(newScale);
        setScaledHeight(containerHeight / newScale);
      }
    };

    calculateScale();

    const resizeObserver = new ResizeObserver(calculateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col bg-background">
      <CardHeader className="flex flex-row items-center justify-between border-b bg-card p-2 text-primary sm:p-3">
        <h1 className="font-sans text-base font-bold sm:text-lg">
          CLIMANEER
        </h1>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleInfo}
            aria-label="Open original site"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            data-testid="button-info"
          >
            <Info className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFullscreen}
            aria-label="Toggle fullscreen"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            data-testid="button-fullscreen"
          >
            <Expand className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            aria-label="Refresh page"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            data-testid="button-refresh"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <div ref={containerRef} className="relative flex-1 overflow-hidden bg-white">
        {loading && (
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="font-sans text-muted-foreground">
              Loading environment...
            </p>
          </div>
        )}
        {scale > 0 && (
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              width: DESKTOP_WIDTH,
              height: scaledHeight,
            }}
          >
            <iframe
              key={iframeKey}
              src={url}
              onLoad={() => setLoading(false)}
              className="border-0"
              title="CLIMANEER Website"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              style={{ width: `${DESKTOP_WIDTH}px`, height: `${scaledHeight}px` }}
              data-testid="main-iframe"
            />
          </div>
        )}
      </div>
    </div>
  );
}
