import React, { useState } from 'react';
import styled from "@emotion/styled";

export default function Logo() {
  const [dividerSize, setDividerSize] = useState(0);

  setInterval(() => setDividerSize(Math.floor(Math.random() * 10)), 50);

  return (
    <Brand>
      <span className="amorris">
        <span data-text="a">a</span>
        <span>&nbsp;</span>
        <span data-text="m">m</span>
        <span>&nbsp;</span>
        <span data-text="o">o</span>
        <span>&nbsp;</span>
        <span data-text="r">r</span>
        <span>&nbsp;</span>
        <span data-text="r">r</span>
        <span>&nbsp;</span>
        <span data-text="i">i</span>
        <span>&nbsp;</span>
        <span data-text="s">s</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </span>

      <Divider size={dividerSize} />

      <span className="code">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span data-text="c">c</span>
        <span>&nbsp;</span>
        <span data-text="o">o</span>
        <span>&nbsp;</span>
        <span data-text="d">d</span>
        <span>&nbsp;</span>
        <span data-text="e">e</span>
      </span>
    </Brand>
  );
}

const Brand = styled.div`
  display: flex;
  color: white;
`;

const Divider = styled.div`
  padding: 0;
  top: 0px;
  width: 2px;
  display: inline-block;
  min-height: 20px !important;
  background: #A6F673;
  box-shadow: 0 0 ${p => p.size}px 0px #61FF00;
`;