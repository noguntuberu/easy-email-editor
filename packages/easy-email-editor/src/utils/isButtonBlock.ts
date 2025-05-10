import { BasicType, AdvancedType } from '@go-mailer/easy-email-core';

export function isButtonBlock(blockType: any) {
  return blockType === BasicType.BUTTON || blockType === AdvancedType.BUTTON;
}
