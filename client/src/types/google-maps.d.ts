declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        MapTypeId: {
          ROADMAP: string;
        };
        Size: new (width: number, height: number) => any;
        marker?: {
          AdvancedMarkerElement?: new (options: any) => any;
        };
      };
    };
  }
}

export {};
