'use client';

import { WorkDataResponse } from '@/types';
import classNames from 'classnames';
import { EditableTd } from './EditableTd';
import { EditableDateTd } from './EditableDateTd';
import { numberFormat } from '@/lib';

interface Props {
  datum: WorkDataResponse;
}

export function Row({ datum }: Props) {
  const fields = [
    { name: 'place', value: datum.place },
    { name: 'title', value: datum.title },
    { name: 'client', value: datum.client },
    { name: 'clientMobile', value: datum.clientMobile },
    { name: 'workerName', value: datum.workerName },
    { name: 'workerMobile', value: datum.workerMobile },
    {
      name: 'payment',
      value: datum.payment,
      displayValue: datum.payment ? numberFormat(Number(datum.payment)) : '',
    },
  ];

  return (
    <tr className={classNames('hover:bg-gray-100')}>
      <EditableDateTd datumId={datum._id} initialValue={datum.date} />
      {fields.map((field) => (
        <EditableTd
          key={field.name}
          datumId={datum._id}
          name={field.name}
          initialValue={field.value}
          isNumeric={field.name === 'payment'}
          dangerouslySetInnerHTML={{
            __html: field.displayValue || field.value,
          }}
        />
      ))}
    </tr>
  );
}
