import React from 'react'
import '@/components/containers/index.scss'
import {Icon} from 'icon'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="headerBar">
			微信
			</div>
		)
	}
}

class Footer extends React.Component {
  render () {
    return (
      <div className="footerBar">
        <ul>
          <Link>`</Link>
          <li>
            <Icon href='icon-ico_addressBook' size='20'></Icon>
            <p>通讯录</p>
          </li>
          <li>
            <Icon href='icon-ico_range' size='20'></Icon>
            <p>发现</p>
          </li>
          <Link to="/me">
          <li>
            <Icon href='icon-ico_recipien' size='20'></Icon>
            <p>我</p>
          </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export {Header, Footer}