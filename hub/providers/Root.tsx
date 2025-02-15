import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react';

import cx from '@hub/lib/cx';

import { ClusterProvider } from './Cluster';
import { ToastProvider } from './Toast';
import { UserPrefsProvider } from './UserPrefs';
import { WalletProvider } from './Wallet';

interface Props {
  children: React.ReactNode;
}

export function RootProvider(props: Props) {
  return (
    <ToastProvider
      className={cx(
        '-translate-x-1/2',
        'flex',
        'items-start',
        'justify-end',
        'left-1/2',
        'max-w-screen-2xl',
        'mt-4',
        'px-4',
      )}
    >
      <ClusterProvider>
        <WalletProvider>
          <UserPrefsProvider>
            <Tooltip.Provider>{props.children}</Tooltip.Provider>
          </UserPrefsProvider>
        </WalletProvider>
      </ClusterProvider>
    </ToastProvider>
  );
}
