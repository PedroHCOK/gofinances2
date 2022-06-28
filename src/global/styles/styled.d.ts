//arquivo criado para sobrescrever o estilo do styled component pelo o tema que eu criei em theme.ts. Pra isso que serve esse arquivo.

import 'styled-components';
import theme from './theme';

declare module 'styled-components'{
    type ThemeType = typeof theme //aqui fazemos a inferencia de theme a ThemeType, o typescript analisa o theme e meio que "copia" fazendo a iferencia e tendo exatamente as mesmas caracteristicas.

    export interface DefaultTheme extends ThemeType {} //aqui pegamos a nossa interface de DefautTheme e extendendo a (acrescentando) o ThemeType.
}

