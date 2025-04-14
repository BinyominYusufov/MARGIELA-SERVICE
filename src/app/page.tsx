"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import QR from "../../src/images/Vector.png"
import krossovki from "../../src/images/krossovki.png"
import Link from 'next/link'
import phone from "../../src/images/iPhone 15.png"
import krosovki from "../../src/images/Frame 301.png"
import { IData } from '../../interface'
import axios from 'axios'

const url = "https://67f7d60d2466325443eaf213.mockapi.io/todo"


const Home = () => {
  const [data, setData] = useState<IData[]>()

  // const [addName, setAddName] = useState<IData>()
  // const [addEmail, setAddEmail] = useState<IData>()

  const tableRef = useRef<HTMLDivElement>(null)

  async function get() {
    try {
      const { data } = await axios.get(url)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get()
  }, [])

  const scrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  async function handleDelete(id: number | string) {
    try {
      await axios.delete(`${url}/${id}`)
      get()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>

      <header className='flex justify-between items-center p-6 cursor-pointer'>
        <div className="text-xl font-bold">/\/</div>
        <nav className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs">
          <p>Главная</p>
          <p>Акция</p>
          <p>Оформление заказа</p>
          <p>Калькулятор стоимости</p>
          <p>Товары в москве</p>
          <p onClick={(e) => {
            e.preventDefault()
            scrollToTable()
          }}>Таблица размеров</p>
         </nav>

        <button className="bg-[#57BFC1] text-black text-xs px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition flex items-center gap-2">
          Сделать заказ <span>✈️</span>
        </button>
      </header>

      <section className="bg-cyan-300 relative flex flex-col-reverse md:flex-row items-center justify-around px-8 py-20 ">
        <div className="max-w-xl">
          <span className="text-cyan-500 font-semibold">Margiela Service</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Правильный выбор!</h1>
          <p className="mt-4 text-gray-700">
            Покупай удобную и стильную обувь из-за границы по низким ценам — мы всё организуем!
          </p>
        </div>
        <Image
          src={krosovki}
          alt="Black Sneaker"
          className="max-w-xs md:max-w-md"
        />
      </section>


      <div className="min-h-screen bg-teal-400 relative overflow-hidden mt-[40px]">
        <div className="container mx-auto px-4 py-8 relative z-10 flex items-center">
          <div className="flex flex-col items-start gap-2 text-white mb-8 ml-4">
            <h1 className="text-2xl font-bold mb-1">Акция на первый заказ!</h1>
            <div>
              <p className="text-sm opacity-90">
                Бесплатная доставка заказанного товара через СДЭК
                <br />в любой регион РФ
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-8 ml-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-5 py-2 rounded-md font-medium w-fit"
              >
                Сделать заказ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-5 py-2 rounded-md font-medium w-fit"
              >
                Отзывы о нас
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Link>
              <div className="relative mb-8">
                <Image
                  src={phone}
                  width={550}
                  height={500}
                  alt="Скриншот мобильного приложения"
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>


          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                •
              </div>
              <h3 className="font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Товары в наличии
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                •
              </div>
              <h3 className="font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Быстрая доставка
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Самая быстрая доставка среди всех конкурентов. Доставка в любую точку РФ за 1-3 дня!
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                •
              </div>
              <h3 className="font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-500"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Ассортимент Polzot
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Мы поможем вам выбрать любую интересующую вас вещь приемлемо с polzot по доступной цене
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-medium text-center mb-16">Оформление заказа товаров с POZION</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5">
            <div className="w-full h-full border-t-2 border-dashed border-teal-300"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mb-6 relative z-10">
              01
            </div>
            <p className="text-center text-sm">
              Оформление заказа займёт не более 5 минут! (мы поможем найти/подобрать товар по фото, определиться с размером)
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mb-6 relative z-10">
              02
            </div>
            <p className="text-center text-sm">
              Выкуп товара в день оплаты (выкупы происходят круглосуточно)
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mb-6 relative z-10">
              03
            </div>
            <p className="text-center text-sm">
              По просьбе клиентов мы предоставляем дополнительные фото/видео интересующей пары
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mb-6 relative z-10">
              04
            </div>
            <p className="text-center text-sm">
              Каждый клиент получает от нас трек-номер, по которому сам может отслеживать посылку
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white py-10 px-4 sm:px-8 rounded-xl shadow-md border border-blue-200">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-around">
          <div className="bg-teal-100 p-3 rounded-lg shadow-inner w-[400px] space-y-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Рассчитай стоимость заказа прямо на сайте
            </h2>
            <div className="space-y-2">
              <button className="w-full bg-white border px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition">
                Цена на товар в юанях
              </button>
              <div className="flex items-center gap-2">
                <button className="flex-1 bg-white border px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition">
                  Обувь
                </button>
                <button className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full text-lg font-bold hover:bg-blue-200 transition">
                  &gt;
                </button>
              </div>
            </div>
            <div className="text-gray-800 font-semibold">
              Итоговая стоимость: <span className="text-black">3500₽</span>
              <div className="text-xs text-gray-400">С учётом доставки</div>
            </div>
          </div>

          <div className="bg-teal-200 p-6 rounded-lg w-full lg:w-1/2 relative overflow-hidden">
            <h3 className="text-xl font-bold text-cyan-900 mb-2">
              Подходит цена? <br />– скорее заказывай!
            </h3>
            <p className="text-sm text-cyan-800 mb-4">
              Выбирайте товары в POIZON или покупайте прямо с нашего склада в Москве
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={QR}
                alt="QR-код"
                width={96}
                height={96}
                className="rounded-md"
              />
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition flex items-center gap-2">
                Сделать заказ <span>📦</span>
              </button>
            </div>

            <div className="absolute right-2 bottom-2 opacity-90 pointer-events-none">
              <Image
                src={krossovki}
                alt="Кроссовки"
                width={360}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>


      <button className='bg-green-600 text-[white] p-[5px_10px] cursor-pointer m-10 rounded'>Add</button>

      <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            data?.map((el: IData) => (
              <tr key={el.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{el.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{el.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{el.email}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${el.status ? "text-green-600" : "text-red-500"}`}>
                  {el.status ? "Active" : "Inactive"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 font-medium"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(el.id)}
                    className="text-red-600 hover:text-red-900 font-medium"
                  >
                    🗑️
                  </button>
                  <input type="checkbox" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>



      <div className="bg-sky-100 min-h-screen p-6">
        <h2 className="text-xl font-medium mb-8">Ответы на частозадаваемые вопросы</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sky-50 rounded-lg overflow-hidden p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-base">Что такое Polzot?</h3>
              <button className="bg-teal-500 rounded-md p-1 text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Polzot - китайский маркетплейс с гигантским ассортиментом брендовых кроссовок и одежды, в том числе лимитированных выпусков и коллабораций. 95% товаров невозможно найти в России.
              <br /><br />
              Помимо гигантского ассортимента Polzot предлагает цены на оригинальную продукцию в 2-3 раза ниже, чем в России, поэтому он так популярен Россиянами.
              <br /><br />
              Ключевая проблема - Polzot работает только на территории Китая, поэтому функцию доставки в Россию осуществляем мы, как посредники, за небольшую комиссию.
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg overflow-hidden">
            <div className="flex justify-between items-start mb-2 p-3">
              <h3 className="font-medium text-base">Сколько по времени занимает доставка с вашего склада?</h3>
              <button className="bg-teal-500 rounded-md p-1 text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Все товары находятся на нашем складе в Москве и доставка в среднем занимает 1-3 дня. Мы отправляем заказы каждый день курьером доставки, чтобы каждому клиенту было как можно удобнее получить свой заказ.
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg overflow-hidden">
            <div className="flex justify-between items-start mb-2 p-3">
              <h3 className="font-medium text-base">Вы предоставляете оригинальные товары?</h3>
              <button className="bg-teal-500 rounded-md p-1 text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Да, мы предоставляем оригинальную продукцию. Наши прямые связи с поставщиками из Европы и Китая позволяют профессионально отбирать товар одной сортовой поставки.
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg overflow-hidden">
            <div className="flex justify-between items-start mb-2 p-3">
              <h3 className="font-medium text-base">Можно ли заказать товар, которого нет у вас в ассортименте?</h3>
              <button className="bg-teal-500 rounded-md p-1 text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Да, конечно. Если вы не нашли нужного товара в нашем ассортименте - мы можем предложить оформить заказ со склада в Китае. Из Китая в Москву товар идет от 5 до 15 дней. С учетом времени на выкуп и доставку до нужного города, товары обычно приходят нашим клиентам за 2 недели.
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg overflow-hidden">
            <div className="flex justify-between items-end mb-2 p-3">
              <h3 className="font-medium text-base">Какие у вас гарантии?</h3>
              <button className="bg-teal-500 rounded-md p-1 text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-700">
              За 2 года нашей работы в нашем телеграм канале уже более 10.000 подписчиков и их число постоянно растет. У нас есть отдельный канал по отзывам клиентов и проведенным заказам. Мы работаем сайтом и продажей, не скрывая свои данные и адреса. Все посылки отгружаются и в случае утери мы помогаем вам получить ваш товар.
            </div>
          </div>
        </div>
      </div>





      <div ref={tableRef} className="max-w-5xl mx-auto p-5 font-sans">
        <h2 className="text-2xl text-gray-800 mb-8">Как правильно подобрать размер обуви?</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="rounded-xl overflow-hidden border border-teal-100 w-[50%]">
            <div className="flex bg-teal-500 text-white font-medium">
              <div className="py-3 px-4 flex-1 text-center border-r border-teal-100">Размер EU</div>
              <div className="py-3 px-4 flex-1 text-center">Размер стопы</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">36</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">22.5 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">37</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">23 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">38</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">24 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">39</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">24.5 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">40</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">25 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">41</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">26 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">42</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">26.5 см</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">43</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">27.5</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">44</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">28</div>
            </div>

            <div className="flex border-b border-teal-100">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">45</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">29</div>
            </div>

            <div className="flex">
              <div className="py-2 px-4 flex-1 text-center border-r border-teal-100 text-teal-500">46</div>
              <div className="py-2 px-4 flex-1 text-center text-teal-500">30</div>
            </div>
          </div>

          <div className="flex relative items-center">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mr-4 flex-shrink-0">01</div>
                <div className="text-gray-700">
                  Поставь ногу на лист бумаги так, чтоб пятка касалась стены
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mr-4 flex-shrink-0">02</div>
                <div className="text-gray-700">
                  Обведи ногу карандашом, не отрывая стопу от бумаги
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mr-4 flex-shrink-0">03</div>
                <div className="text-gray-700">
                  Измерь расстояние от кончика большого пальца до конца пятки
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-medium mr-4 flex-shrink-0">04</div>
                <div className="text-gray-700">
                  Повтори эти же действия со второй стопой
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-12 w-64 md:w-72">
              <Image src={krosovki} alt="Кроссовок" className="max-w-full h-auto" />
            </div>

            <p className="text-xs text-gray-500 mt-10">
              Узнав большую длину стопы в см, сверьтесь с нашей таблицей и найдите свой размер
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-black text-gray-300 px-6 py-8 text-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white text-xs font-semibold">
            <div className="text-xl font-bold text-white">/\/</div>
            <div>
              <div>MARGIELA</div>
              <div>SERVICE</div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs">
            <a href="#">Главная</a>
            <a href="#">Акция</a>
            <a href="#">Оформление заказа</a>
            <a href="#">Калькулятор стоимости</a>
            <a href="#">Товары в москве</a>
            <a href="#">Таблица размеров</a>
          </nav>

          <button className="bg-white text-black text-xs px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition flex items-center gap-2">
            Сделать заказ <span>✈️</span>
          </button>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>Designed with love by Mifka design agency</p>
          <p>Все права защищены ©2023</p>
        </div>
      </footer>
    </>
  )
}

export default Home
