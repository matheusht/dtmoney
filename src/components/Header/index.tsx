import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal'
import { useState } from 'react';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
            Nova Transação
        </button>
        </Content>
        </Container>
    );
}