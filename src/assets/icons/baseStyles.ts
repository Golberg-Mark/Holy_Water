import styled from 'styled-components';

export const IconPathStrokeStyles = styled.svg`
    cursor: pointer;
    
   @media (hover: hover) {
       &:hover path {
           stroke: rgb(228, 34, 156);
           transition: stroke .15s ease-in-out;
       }
   }
    
   @media (hover: none) {
       &:active path {
           stroke: rgb(228, 34, 156);
           transition: stroke .15s ease-in-out;
       }
   }
`;

export const IconCircleFillStyles = styled.svg`
    cursor: pointer;
    
    @media (hover: hover) {
        &:hover circle {
            fill: rgb(228, 34, 156);
            transition: fill .15s ease-in-out;
        }
    }
    
    @media (hover: none) {
        &:active circle {
            fill: rgb(228, 34, 156);
            transition: fill .15s ease-in-out;
        }
    }
`;
