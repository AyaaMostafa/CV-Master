/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../style/headerStyle.scss';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import i18n from '../../languages/i18n.js';

function Header() {
  const [selectedNav, setSelectedNav] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigate = useNavigate();
  const { t } = useTranslation();
  function setNav(name: string, path: string) {
    setSelectedNav(name);
    navigate(path);
  }
  function changeLanguage(lang: string) {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <li className="nav-item">
          <a className={`nav-link ${selectedNav === '1' ? 'active' : ''}`} aria-current="page" onClick={() => setNav('works-development', '/works-development')}>Development</a>
        </li>
      ),
    },
    {
      key: '2',
      label: (
        <li className="nav-item">
          <a className={`nav-link ${selectedNav === 'works-dataScience' ? 'active' : ''}`} aria-current="page" onClick={() => setNav('works-DataScience', '/works-dataScience')}>Data Science</a>
        </li>
      ),
    },
    {
      key: '3',
      label: (
        <li className="nav-item">
          <a className={`nav-link ${selectedNav === '1' ? 'active' : ''}`} aria-current="page" onClick={() => setNav('works-zos', '/works-zos')}>z/OS</a>
        </li>
      ),
    },
    {
      key: '4',
      label: (
        <li className="nav-item">
          <a className={`nav-link ${selectedNav === '1' ? 'active' : ''}`} aria-current="page" onClick={() => setNav('works-as400', '/works-as400')}>AS400</a>
        </li>
      ),
    },
    {
      key: '5',
      label: (
        <li className="nav-item">
          <a className={`nav-link ${selectedNav === '1' ? 'active' : ''}`} aria-current="page" onClick={() => setNav('works-It', '/works-It')}>Technical Support</a>
        </li>
      ),
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ms-4 me-4">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img className="navbar-toggler-icon-custom" alt="toggler" src="/public/navbar-toggler.png" />
        </button>
        <a onClick={() => setNav('home', '/')} className="navbar-brand">
          <img className="navbar-logo" alt="Logo" src="/public/meapal-logo.png" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1 mt-2">
            <li className="nav-item ms-3">
              <Dropdown menu={{ items }}>
                <a className={`nav-link ${selectedNav === 'works' ? 'active' : ''}`} href="#" onClick={() => setNav('jobs', '/jobs')}>
                  {t('services')}
                  <DownOutlined className="ms-1" />
                </a>
              </Dropdown>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'know-how' ? 'active' : ''}`} onClick={() => setNav('know-how', '/ouroffers')}>{t('industries')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'meapal' ? 'active' : ''}`} onClick={() => setNav('meapal', '/our-vision')}>{t('partners')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'v-vision' ? 'active' : ''}`} onClick={() => setNav('v-vision', '/verbatim-vision')}>{t('customers')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'jobs' ? 'active' : ''}`} href="#" onClick={() => setNav('jobs', '/jobs')}>{t('newsAndEvents')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'jobs' ? 'active' : ''}`} href="#" onClick={() => setNav('jobs', '/jobs')}>{t('aboutUs')}</a>
            </li>
          </ul>
          <form className="d-flex mt-2">
            <div className="header-options">
              <div className="language-options">
                <span onClick={() => { changeLanguage('fr'); }} className={`language ${selectedLanguage === 'fr' ? 'active' : ''}`}>FR</span>
                <span className="separator">|</span>
                <span onClick={() => { changeLanguage('en'); }} className={`language ${selectedLanguage === 'en' ? 'active' : ''}`}>EN</span>
                <span className="separator">|</span>
                <span onClick={() => { changeLanguage('ar'); }} className={`language ${selectedLanguage === 'ar' ? 'active' : ''}`}>AR</span>
              </div>
              <button type="button" className="contact-button">Contact us</button>
            </div>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
