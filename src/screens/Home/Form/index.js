import React, { useState } from 'react';

import {
  Button,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Row,
  Select,
  AutoComplete,
  Input,
  Spin
} from 'antd';

import {
  disabledPreviousDates,
  formulateItems,
  isValidNumber
} from 'utils/miscellenaous';

const { Item } = Form;
const { Option } = Select;

const optionsLoading = [{ label: <Spin />, value: 'Loading' }];

const SearchForm = ({
  cities,
  originCities,
  loadingOriginCities,
  handleSubmit,
  handleSearch,
  handleSearchDestination,
  destinationCities,
  loadingDestinationCities,
  initialValues,
  isErrorExist
}) => {
  const [form] = Form.useForm();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setDisableSubmit(hasErrors);
  };

  const itemsOriginCities = formulateItems(originCities);
  const itemsDestinationCities = formulateItems(destinationCities);

  return (
    <Form
      form={form}
      onFieldsChange={handleFormChange}
      onFinish={handleSubmit}
      scrollToFirstError={true}
      layout="vertical"
      initialValues={{
        city_origin: initialValues.city_origin,
        city_destination: initialValues.city_destination,
        cities_intermediates: initialValues.cities_intermediates
      }}
    >
      <Item
        name="city_origin"
        label={'City of Origin'}
        rules={[{ required: true, message: 'required field' }]}
      >
        <AutoComplete
          options={
            loadingOriginCities
              ? optionsLoading
              : originCities.length > 0
              ? itemsOriginCities
              : []
          }
          size="large"
          onChange={handleSearch}
        >
          <Input />
        </AutoComplete>
      </Item>

      <Item name="cities_intermediates" label={'Intermediates'}>
        <Select mode="multiple" size="large" showSearch>
          {cities.map(item => (
            <Option key={item[0]} value={item[0]}>
              {item[0]}
            </Option>
          ))}
        </Select>
      </Item>
      <Item
        name="city_destination"
        label={'City of Destination'}
        rules={[{ required: true, message: 'required field' }]}
      >
        <AutoComplete
          options={
            loadingDestinationCities
              ? optionsLoading
              : destinationCities.length > 0
              ? itemsDestinationCities
              : []
          }
          size="large"
          onChange={handleSearchDestination}
        >
          <Input />
        </AutoComplete>
      </Item>
      <Item
        name="date"
        label={'Date of The Trip'}
        rules={[{ required: true, message: 'required field' }]}
      >
        <DatePicker
          allowClear
          size="large"
          className="datePicker"
          disabledDate={disabledPreviousDates}
          placeholder={'Date of The Trip'}
        />
      </Item>

      <Item
        label={'Number of passengers'}
        name="number_passengers"
        rules={[{ validator: (_, value) => isValidNumber(value) }]}
      >
        <InputNumber
          size="large"
          type="number"
          className="inputNumber"
          placeholder={'Number of passengers'}
        />
      </Item>

      <Divider className="d_10" />

      <Divider className="d_10" />
      <Row type="flex" justify="space-between">
        <Button disabled={disableSubmit || isErrorExist} htmlType="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

export default SearchForm;
