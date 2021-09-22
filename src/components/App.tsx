import React, { memo } from 'react';
import '../App.css';
import { useAuthOptions } from '../common/hooks/use-auth-options';
import { ThemeProvider, ColorModeProvider } from "@stacks/ui";
import { Connect } from '@stacks/connect-react';
import { UserArea } from './user-area';

const AppWrapper: React.FC = memo(({ children }) => {
  let authOptions = useAuthOptions();

  return (
    <ThemeProvider>
      <ColorModeProvider defaultMode='light'>
        <Connect authOptions={authOptions}>{children}</Connect>
      </ColorModeProvider>
    </ThemeProvider>
  );

});

function App() {
  return (
    <AppWrapper>
      <UserArea />
    </AppWrapper> 
  );
}

export default App;
