import { useEditorContext, useEditorProps } from '@go-mailer/easy-email-editor';
import React, { useMemo } from 'react';

export function usePersonalization() {
  const { personalizations: defaultPersonalizations } = useEditorProps();
  const { pageData } = useEditorContext();

  const personalizationsOptions = pageData.data.value.personalization;

  const personalizations = useMemo(() => {
    const placeholders: Array<{
      value: string;
      label: React.ReactNode;
    }> = [];
    if (defaultPersonalizations) {
      placeholders.push(...defaultPersonalizations);
    }
    if (personalizationsOptions) {
      const options = personalizationsOptions.map(item => ({
        value: item.value,
        label: item.label,
      }));
      placeholders.unshift(...options);
    }

    return placeholders.map(item => ({
      value: item.value,
      label: <span>{item.label}</span>,
    }));
  }, [personalizationsOptions, defaultPersonalizations]);

  return {
    personalizations,
  };
}
