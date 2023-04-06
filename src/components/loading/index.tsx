import classNames from 'classnames';
import { IBaseComponent } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Loading({ className }: IBaseComponent) {
  const { t } = useTranslation(['common']);

  return (
    <div
      className={classNames(
        'fixed z-10 flex h-full w-full items-center justify-center bg-transparent',
        className
      )}
    >
      <span className="text-md text-slate-300">{t('common:loading')}</span>
    </div>
  );
}
