import { BasicType, AdvancedType } from '@go-mailer/easy-email-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}
