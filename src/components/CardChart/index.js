import React from 'react'
import { Card, CardContainer, Title } from './style'

export const CardChart = ({ title="Completed Visit", color="#2fc4b2", children }) => {
    return (
        <CardContainer>
            <Card color={color}>
                {
                    children
                }
            </Card>
            <Title>{title}</Title>
        </CardContainer>
    )
}