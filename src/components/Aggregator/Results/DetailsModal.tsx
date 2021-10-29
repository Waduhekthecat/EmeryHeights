import React, { Component } from "react";
import styled from 'styled-components';
import { render } from "blockies-ts";
import DetailCard from './Card2'

export function Modal()  {
  return (
    <div>
      <section className="Details">
        <DetailCard/>
      </section>
    </div>
  );
};

export default Modal
