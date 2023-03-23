import styled from "styled-components";

import { Field, ErrorMessage } from "formik";

export const FieldStyled = styled(Field)`
    margin-bottom: 10px;
`

export const Error = styled(ErrorMessage)`
    color: red;
`