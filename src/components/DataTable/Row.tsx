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
  return (
    <tr className={classNames('hover:bg-gray-100')}>
      <Td
        datumId={datum._id}
        name="date"
        dangerouslySetInnerHTML={{
          __html: datum.date ? dayjs(datum.date).format(DATE_FORMAT) : '',
        }}
      />
      <Td
        datumId={datum._id}
        name={'place'}
        dangerouslySetInnerHTML={{
          __html: datum.place,
        }}
      />
      <Td
        datumId={datum._id}
        name="title"
        dangerouslySetInnerHTML={{ __html: datum.title }}
      />
      <Td
        datumId={datum._id}
        name="client"
        dangerouslySetInnerHTML={{
          __html: datum.client,
        }}
      />
      <Td
        datumId={datum._id}
        name="clientMobile"
        dangerouslySetInnerHTML={{ __html: datum.clientMobile }}
      />
      <Td
        datumId={datum._id}
        name="workerName"
        dangerouslySetInnerHTML={{ __html: datum.workerName }}
      />
      <Td
        datumId={datum._id}
        name="workerMobile"
        dangerouslySetInnerHTML={{ __html: datum.workerMobile }}
      />
      <Td
        datumId={datum._id}
        name="payment"
        dangerouslySetInnerHTML={{
          __html: datum.payment ? numberFormat(datum.payment) : '',
        }}
      />
    </tr>
  );
}
