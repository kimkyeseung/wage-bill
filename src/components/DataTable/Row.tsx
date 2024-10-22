'use client';

import { WorkDataResponse } from '@/types';
import classNames from 'classnames';
import { Td } from './Td';
import dayjs from 'dayjs';
import { numberFormat } from '@/lib';

const DATE_FORMAT = 'MM/DD/YYYY';

interface Props {
  datum: WorkDataResponse;
}

export function Row({ datum }: Props) {
  const fields = [
    {
      name: 'date',
      value: datum.date ? dayjs(datum.date).format(DATE_FORMAT) : '',
    },
    { name: 'place', value: datum.place },
    { name: 'title', value: datum.title },
    { name: 'client', value: datum.client },
    { name: 'clientMobile', value: datum.clientMobile },
    { name: 'workerName', value: datum.workerName },
    { name: 'workerMobile', value: datum.workerMobile },
    {
      name: 'payment',
      value: datum.payment ? numberFormat(datum.payment) : '',
    },
  ];

  return (
    <tr className={classNames('hover:bg-gray-100')}>
      {fields.map((field) => (
        <Td
          key={field.name}
          datumId={datum._id}
          name={field.name}
          initialValue={field.value}
          dangerouslySetInnerHTML={{
            __html: field.value,
          }}
        />
      ))}
    </tr>
  );
}
