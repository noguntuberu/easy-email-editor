import { BasicType, AdvancedType } from '@go-mailer/easy-email-core';

export function isTableBlock(blockType: any) {
  return blockType === AdvancedType.TABLE;
}
