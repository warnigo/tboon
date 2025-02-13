import { type FC } from "react"

import { PhoneCall } from "lucide-react"
import PhoneInput from "react-phone-input-2"

import "react-phone-input-2/lib/style.css"

type Props = {
  value?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
}

export const PhoneNumberInput: FC<Props> = ({ value, onChange }) => (
  <div style={{ position: "relative", width: "100%" }}>
    <PhoneCall
      color="#999"
      size={19}
      style={{
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    />

    <PhoneInput
      buttonStyle={{ display: "none" }}
      containerStyle={{ width: "100%" }}
      country="uz"
      countryCodeEditable={false}
      dropdownStyle={{ display: "none" }}
      onlyCountries={["uz"]}
      placeholder="Введите номер телефона"
      value={value}
      inputStyle={{
        width: "100%",
        height: "48px",
        fontSize: "14px",
        paddingLeft: "40px",
        borderRadius: "0.5rem",
        border: "1px solid #ccc",
      }}
      onChange={onChange}
    />
  </div>
)
