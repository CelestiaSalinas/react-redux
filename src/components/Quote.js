import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../actions/quoteActions'
import Loader from 'react-loader-spinner';
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #431070;
  border: 2px solid #431070;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin:30px;
  &:hover {
    background-color: #8b3ad6;
    color: white;
  }`

const Quote = props => {
    return (
        <div>
            <h1>A Penny For Your Quotes</h1>
            {props.quote && !props.idFetching && <p>Ready?</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            {props.quote && <p>{props.quote}</p>}
            <Button  onClick={props.getQuote}>Click for a Quote</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
}
}
export default connect(mapStateToProps, { getQuote }) (Quote)
