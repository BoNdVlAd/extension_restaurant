import React from 'react'
import {styled} from 'styled-components'
import {IGood} from '../Interfaces/IGood'

interface GoodItemProps {
    good: IGood
}

const GoodPage: React.FC<GoodItemProps> = ({good}) => {
    const sumPrice = good.count * good.price

    return (
        <>

            <GoodCard>

                <GoodTitle>{good.title}</GoodTitle>
                <GoodPrice>{good.price}</GoodPrice>
                <SumPrice>{sumPrice}</SumPrice>
                <GoodCount>{good.count}</GoodCount>
            </GoodCard>
        </>
    )
}

export default GoodPage

const GoodCard = styled.div`
    width: 100%;
    gap: 40px;
    display: flex;
    align-items: center;
`

const GoodTitle = styled.p`
    word-break: break-word;
    min-width: 100px;
    flex: 1;
`

const GoodPrice = styled.p`
    flex: 1;
`

const SumPrice = styled.p`
    flex: 1;
`

const GoodCount = styled.p`
    flex: 1;
`
