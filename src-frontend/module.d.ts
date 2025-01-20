declare module '*.css' {
  const style: { [key: string]: string };

  export default style;
}

declare module '*.sass' {
  const style: { [key: string]: string };

  export default style;
}

declare module '*.png' {
  const url: string;

  export default url;
}

declare module '*.jpg' {
  const url: string;

  export default url;
}

declare module '*.jpeg' {
  const url: string;

  export default url;
}

declare module '*.gif' {
  const url: string;

  export default url;
}

declare module '*.webp' {
  const url: string;

  export default url;
}

declare module '*.avif' {
  const url: string;

  export default url;
}

declare module '*.component.svg' {
  import type { Component } from 'vue';

  const VueComponent: Component;

  export default VueComponent;
}

declare module '*.svg' {
  const url: string;

  export default url;
}

declare module '*.vue' {
  import type { DefineSetupFnComponent } from 'vue';

  const VueComponent: DefineSetupFnComponent<any>;

  export default VueComponent;
}