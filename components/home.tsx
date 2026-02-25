import { useTranslations } from "next-intl";
import styles from './Navbar.module.css';
import { Button, Flex } from 'antd';
import { Modal } from 'antd';
import { useState } from "react";
import { useRef } from 'react';
import { Input } from 'antd';
import emailjs from '@emailjs/browser';
const { TextArea } = Input;
import { message } from 'antd';



const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        let value = e.target.value;

        // Валидация для поля телефона 
        if (field === 'phone') {
            // Удаляем все НЕ цифры 
            value = value.replace(/\D/g, '');
            // Ограничиваем длину до 9 символов 
            if (value.length > 9) {
                value = value.slice(0, 9);
            }
        }
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        // Проверка заполнения полей
        if (!formData.name || !formData.phone || !formData.email) {
            message.warning('Пожалуйста, заполните все поля');
            return;
        }

        setLoading(true);
        try {
            const result = await emailjs.send(
                'service_68qnbqz',
                'template_j84bs1a',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message || 'Нет сообщения',
                },
                'fMQauStCI9E6gDSsL'
            );

            if (result.status === 200) {
                message.success('Успешно отправлено!');
                // Очистить форму
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                handleCancel();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            message.error('Ошибка отправки. Проверьте консоль для деталей.');
        } finally {
            setLoading(false);
        }
    };

    const t = useTranslations("HomePage");
    return (
        <>
            <header className={styles.home_container}>
                {/* Заголовок с typewriter эффектом */}
                <div className={`${styles.typewriter_container} ${styles.bounce_in_top}`}>
                    {/* <h3 className={styles.typewriter_title}>
                        {t('welcome')}
                    </h3> */}
                </div>

                {/* Описание с typewriter эффектом */}
                <div className={styles.typewriter_container}>
                    <p className={styles.typewriter_description}>
                        {t('description')}
                    </p>
                </div>
                <Button onClick={showModal} className={styles.btnZayafka} type="dashed" ghost>
                    {t('ostavitZayafku')}
                </Button>

                <Modal
                    className={styles.becgroundModal}
                    title={t('textModal')}
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleSubmit}
                    onCancel={handleCancel}
                    confirmLoading={loading}
                >
                    <Input
                        style={{ border: '1.5px solid gray' }}
                        placeholder={t('vveditVasheImya')}
                        value={formData.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    /> <br /> <br />
                    <Input
                        style={{ border: '1.5px solid gray' }}
                        placeholder={t('numberPhone')}
                        value={formData.phone}
                        onChange={(e) => handleInputChange(e, 'phone')}
                    /> <br /> <br />
                    <Input
                        style={{ border: '1.5px solid gray' }}
                        placeholder={t('vvediteEmail')}
                        value={formData.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                    /> <br /><br />
                    <TextArea
                        showCount
                        maxLength={100}
                        value={formData.message}
                        onChange={(e) => handleInputChange(e, 'message')}
                        placeholder="Введите сообщение"
                        style={{ height: 120, resize: 'none',border: '1.5px solid gray'}}
                    /> <br /><br />
                </Modal>
            </header>
        </>
    )
}
export default Home;

