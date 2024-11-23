declare namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string; // Az Ionicons által használt attribútumok hozzáadása
        size?: string; // Például 'small', 'large', 'medium' vagy pixel értékek
        color?: string; // Ikon színe
      };
    }
  }
  