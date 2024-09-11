import React from 'react';
import './App.css';
import styled from "styled-components";
import {IGood} from "./Interfaces/IGood";
import GoodItem from "./components/GoodItem";

function App() {
    const [goods, setGoods] = React.useState<IGood[] | null>();

    React.useEffect(() => {
        const updateGoods = () => {
            chrome.storage.local.get(['goods'], (result) => {
                setGoods(JSON.parse(result.goods))
            });
        };

        const handleStorageChange = (changes: any, areaName: any) => {
            chrome.storage.local.get(['goods'], (result) => {
                setGoods(JSON.parse(result.goods))
            });
        };

        chrome.storage.onChanged.addListener(handleStorageChange);

        updateGoods();

        return () => {
            chrome.storage.onChanged.removeListener(handleStorageChange);
        };
    }, []);


    const totalPrice = goods?.reduce((x, y) => {
        return x + y.count * y.price
    }, 0)

    return (
        <Wrapper>
            <Container>
                <Title>Cart</Title>
                <FlexColumn>
                    <p>name</p>
                    <p>price</p>
                    <p>sum</p>
                    <p>count</p>
                </FlexColumn>
                <Flex>
                    {
                        goods?.map(good => (
                            <GoodItem good={good}/>
                        ))
                    }
                </Flex>
                <FooterFlex>
                    <TotalPrice>total price: {totalPrice} грн</TotalPrice>
                    <PlaceOrderButton>place an order</PlaceOrderButton>
                </FooterFlex>
            </Container>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    background-color: #224870;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const Container = styled.div`
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    line-height: 0;
    padding-top: 1rem;
`

const Flex = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 225px;
    scrollbar-width: thin;
    background-color: #FFF;
    border-radius: 20px;
    color: #000;
    padding: 0 1rem;
`
const FlexColumn = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 0 1rem;
  
    p:first-child{
      min-width: 100px;
    }
  
    p {
        flex: 1;
        line-height: 0;
    }
`

const FooterFlex = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

`

const TotalPrice = styled.p`
    font-weight: 600;
`

const PlaceOrderButton = styled.button`
    background: #5E5DF0;
    border-radius: 999px;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 10px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 2px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
`