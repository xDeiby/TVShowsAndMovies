import React from 'react'
import { Pagination } from 'semantic-ui-react'

interface IElmentsPages {
    pag_act : number;
    total_pags : number;
    onChange : Function;

}

const PaginationExampleShorthand = (props : IElmentsPages) => {
  return (
  <Pagination
    defaultActivePage= {props.pag_act}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={props.total_pags}
    boundaryRange = {5}
    onPageChange = {() => props.onChange}
  />);
}

export default PaginationExampleShorthand
