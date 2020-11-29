import React from "react";
import { InputNumber, Input, Select, Switch } from "antd";
const { Option } = Select;

export const inputField = (placeholder) => {
	return <Input placeholder={placeholder} />;
};
export const inputNumberField = (placeholder) => {
	return <InputNumber placeholder={placeholder} min={1} />;
};
export const SelectField = (defaultValue, values) => {
	return (
		<Select defaultValue={defaultValue} style={{ width: 120 }}>
			{values.map((value, index) => {
				return (
					<Option value={value} key={index}>
						{value}
					</Option>
				);
			})}
		</Select>
	);
};

export const SwitchField = () => {
	return <Switch defaultChecked style={{ maxWidth: 50 }} />;
};