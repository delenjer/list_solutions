import React from 'react';

export interface TabNavDto {
  id: string,
  name: string,
}

export interface TabBodyDto {
  id: string,
  component: React.ReactNode;
}

export interface DataDto {
  id: string;
  name: string;
  info: string;
  price: string;
}

export interface CheckboxListItem {
  id: string,
  title: string;
  list: List[];
}

interface List {
  isCheck: boolean;
  label: string;
  name: string;
}
