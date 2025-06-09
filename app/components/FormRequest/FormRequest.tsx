"use client";
import classNames from "classnames";
import styles from "./FormRequest.module.css";
import { FC, HTMLAttributes, useState } from "react";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import MaskedInput from "../MaskedInput/MaskedInput";

interface FormRequestProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const FormRequest: FC<FormRequestProps> = ({ className, ...props }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "name":
        setErrors((prev) => ({
          ...prev,
          name:
            value.trim().length < 2 ? "Введите имя (не менее 2 символов)" : "",
        }));
        break;
      case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: /^\+?\d[\d\s\-()]{7,}$/.test(value.trim())
            ? ""
            : "Введите корректный номер телефона",
        }));
        break;
      case "message":
        setErrors((prev) => ({
          ...prev,
          message: value.trim().length < 5 ? "Сообщение слишком короткое" : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    formData.phone.trim().length >= 18 &&
    formData.message.trim().length >= 5 &&
    !errors.name &&
    !errors.phone &&
    !errors.message;

  return (
    <section className={classNames(styles.formRequest, className)} {...props}>
      <Container className={styles.container}>
        <div className={styles.titleWrap}>
          <Title
            type="h2"
            className={styles.title}
            aria-label="Оставить заявку"
          >
            Оставить заявку
          </Title>
          <Subtitle className={styles.subtitle}>
            Подберём оптимальную модель, рассчитаем длину линии и подготовим
            технико-коммерческое предложение
          </Subtitle>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.inputWrap}>
              <input
                type="text"
                name="name"
                placeholder="Имя*"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
            <div className={styles.inputWrap}>
              <input
                type="text"
                name="company"
                placeholder="Компания"
                className={styles.input}
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputWrap}>
              <MaskedInput
                mask="+{7} (000) 000-00-00"
                name="phone"
                placeholder="Телефон*"
                className={styles.input}
                onAccept={(value: any) => {
                  setFormData((prev) => ({ ...prev, phone: value }));
                  setErrors((prev) => ({
                    ...prev,
                    phone:
                      value.includes("_") || value.length < 18
                        ? "Введите корректный номер телефона"
                        : "",
                  }));
                }}
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </div>
            <div className={styles.inputWrap}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputWrap}>
            <textarea
              name="message"
              placeholder='Сообщение* (например: "Нужна лента на склад с взрывозащитой")'
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              onInput={handleTextareaInput}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={!isFormValid}
          >
            Отправить
          </button>
        </form>
      </Container>
    </section>
  );
};

export default FormRequest;
