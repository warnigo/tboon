import { Button, Checkbox, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import classNames from "classnames/bind"
import type { FC } from "react"

import { useGetConnect } from "../api/api"
import { type ConnectType } from "../mode/types"

import style from "./Home.module.scss"

const cn = classNames.bind(style)
interface DataType extends ConnectType {
  key: string
}

const Home: FC = () => {
  const { data, isLoading } = useGetConnect()

  const formatNumber = (num: string): string =>
    new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(parseFloat(num))

  const calculateDifference = (total: string, payable: string): string => {
    const totalNum = parseFloat(total)
    const payableNum = parseFloat(payable)
    return (((totalNum - payableNum) / totalNum) * 100).toFixed(2)
  }

  const columns: ColumnsType<DataType> = [
    {
      width: 40,
      render: () => <Checkbox />,
    },
    {
      title: "Договор",
      key: "contract",
      render: (_, record) => (
        <div className={cn("contract-cell")}>
          <span className={cn("contract-id")}>{record.invoice_id}</span>
          <span className={cn("contract-ref")}>{record.contract_number}</span>
        </div>
      ),
    },
    {
      title: "Номер договора ЭСФ",
      key: "contractNumber",
      render: (_, record) => (
        <div className={cn("contract-number")}>
          <div>{record.contract_number}</div>
          <div className={cn("date")}>{record.contract_date}</div>
        </div>
      ),
    },
    {
      title: "Партнер",
      key: "partner",
      render: (_, record) => (
        <div className={cn("partner-name")}>
          {record.seller_name}
          <div className={cn("tin")}>{record.seller_tin}</div>
        </div>
      ),
    },
    {
      title: "Общая сумма",
      key: "totalAmount",
      render: (_, record) => (
        <div className={cn("amount-cell")}>
          <div>{formatNumber(record.sum_total)}</div>
          <div className={cn("sub-amount")}>
            {formatNumber(record.payable_total)}
          </div>
        </div>
      ),
    },
    {
      title: "Разница",
      key: "difference",
      render: (_, record) => {
        const diff = calculateDifference(record.sum_total, record.payable_total)
        const diffAmount =
          parseFloat(record.sum_total) - parseFloat(record.payable_total)
        return (
          <div className={cn("difference-cell")}>
            <div>{diff}%</div>
            <div className={cn("sub-amount")}>
              {formatNumber(diffAmount.toString())}
            </div>
          </div>
        )
      },
    },
    {
      title: "Статус",
      key: "status",
      render: (_, record) => (
        <span className={cn(`status-badge ${record.statetext.class}`)}>
          {record.statetext.text}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 220,
      render: () => (
        <div className={cn("action-buttons")}>
          <Button danger className={cn("reject-btn")}>
            Отказ
          </Button>

          <Button className={cn("confirm-btn")} type="primary">
            Подтвердить
          </Button>
        </div>
      ),
    },
  ]

  const tableData = data?.map((item, index) => ({
    ...item,
    key: index.toString(),
  }))

  return (
    <div className={cn("home")}>
      <Table
        columns={columns}
        dataSource={tableData}
        loading={isLoading}
        pagination={{ pageSize: 10 }}
        rowClassName={cn("table-row")}
        scroll={{ x: true }}
      />
    </div>
  )
}

export default Home
