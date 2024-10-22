'use client';

import { WorkDataResponse } from '@/types';
import classNames from 'classnames';
import { EditableTd } from './EditableTd';
import { EditableDateTd } from './EditableDateTd';
import { numberFormat } from '@/lib';
import { MobileFormatEditableTd } from './MobileFormatEditableTd';
import { NumericEditableTd } from './NumericEditableTd';

interface Props {
  datum: WorkDataResponse;
}

export function Row({ datum }: Props) {
  const fields = [
    { name: 'place', value: datum.place, type: 'text' },
    { name: 'title', value: datum.title, type: 'text' },
    { name: 'client', value: datum.client, type: 'text' },
    { name: 'clientMobile', value: datum.clientMobile, type: 'mobile-format' },
    { name: 'workerName', value: datum.workerName, type: 'text' },
    { name: 'workerMobile', value: datum.workerMobile, type: 'mobile-format' },
    { name: 'payment', value: datum.payment, type: 'numeric' },
  ];

  return (
    <tr className={classNames('hover:bg-gray-100')}>
      <EditableDateTd datumId={datum._id} initialValue={datum.date} />
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <EditableTd
                key={field.name}
                datumId={datum._id}
                name={field.name}
                initialValue={field.value}
                dangerouslySetInnerHTML={{
                  __html: field.value,
                }}
              />
            );
          case 'mobile-format':
            return (
              <MobileFormatEditableTd
                key={field.name}
                datumId={datum._id}
                name={field.name}
                initialValue={field.value as string}
                dangerouslySetInnerHTML={{
                  __html: field.value,
                }}
              />
            );
          case 'numeric':
            return (
              <NumericEditableTd
                key={field.name}
                datumId={datum._id}
                name={field.name}
                initialValue={field.value as number}
                dangerouslySetInnerHTML={{
                  __html: field.value && numberFormat(Number(field.value)),
                }}
              />
            );
        }
      })}
    </tr>
  );
}
