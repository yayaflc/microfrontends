declare module 'app1/HelloButton' {
    import { ComponentType } from 'react';
    const HelloButton: ComponentType<{ onClick?: () => void }>;
    export default HelloButton;
  }

  declare module 'app1/GoodbyeButton' {
    import { ComponentType } from 'react';
    const GoodbyeButton: ComponentType<{ onClick?: () => void }>;
    export default GoodbyeButton;
  }