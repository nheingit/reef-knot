import React, { ChangeEvent, FC } from 'react';
import { Checkbox, CheckboxProps, Link } from '@reef-knot/ui-react';
import { TermsStyle, TermsTextStyle } from './styles';
import { Metrics } from '../WalletsModal';

type WalletModalConnectTermsProps = Pick<
  CheckboxProps,
  'checked' | 'onChange'
> & { metrics?: Metrics };

export const Terms: FC<WalletModalConnectTermsProps> = (props) => {
  const { onChange, metrics } = props;
  const onClickTermsAccept =
    metrics?.events?.click?.handlers.onClickTermsAccept;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    if (e.target.checked) {
      onClickTermsAccept?.();
    }
  };

  return (
    <TermsStyle>
      <Checkbox onChange={handleCheckboxChange} checked={props.checked} />
      <TermsTextStyle>
        I certify that I have read and accept the updated{' '}
        <Link href="https://lido.fi/terms-of-use">Terms&nbsp;of&nbsp;Use</Link>{' '}
        and{' '}
        <Link href="https://lido.fi/privacy-notice">Privacy&nbsp;Notice</Link>.
      </TermsTextStyle>
    </TermsStyle>
  );
};
