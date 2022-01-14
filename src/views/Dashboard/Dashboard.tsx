import { useMemo, useState } from 'react'

import { RadioButton } from 'components'
import InstalledData from 'helpers/static/installed.json'
import UninstalledData from 'helpers/static/uninstalled.json'
import moment from 'moment'

import * as Styled from './Dashboard.style'
import { Sdk, SdkIndex } from './types'

const DashboardView: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(SdkIndex.INSTALLED)

  const activeData = useMemo(() => {
    if (activeIndex === SdkIndex.INSTALLED) {
      return InstalledData.data.installedSdks
    }
    if (activeIndex === SdkIndex.UNINSTALLED) {
      return UninstalledData.data.uninstalledSdks
    }

    return []
  }, [activeIndex])

  const sdkByCategory = useMemo(() => {
    const category: Record<string, Sdk[]> = {}

    activeData.forEach((item) => {
      const firstCategory = item.categories[0]

      if (!category[firstCategory]) category[firstCategory] = []

      category[firstCategory] = [...category[firstCategory], item]
    })

    return category
  }, [activeData])

  const latestUpdateDate = useMemo(() => {
    const lastSeenDates = activeData.map((item) => moment(item.lastSeenDate))

    return moment.max(lastSeenDates)
  }, [activeData])

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Airnow SDK Browser</Styled.Title>
        <RadioButton
          activeIndex={activeIndex}
          options={['Installed', 'Uninstalled']}
          onChange={setActiveIndex}
        />
      </Styled.Header>

      <Styled.Content>
        <Styled.ContentHeader>
          <Styled.ContentTitle>
            {activeIndex === 0 ? 'Installed ' : 'Uninstalled '} SDKs (Lastest
            Update: {latestUpdateDate.format('MMM DD, YYYY')})
          </Styled.ContentTitle>
          <Styled.ContentTitle>{activeData.length}</Styled.ContentTitle>
        </Styled.ContentHeader>
        <Styled.SubTitle />
        {Object.keys(sdkByCategory)
          .sort()
          .map((category) => (
            <Styled.SdkRow key={category}>
              <Styled.CategoryText>✓{category}</Styled.CategoryText>
              {sdkByCategory[category].map((sdkInfo) => (
                <Styled.SdkInfoRow key={sdkInfo.name}>
                  <span>{sdkInfo.name}</span>
                  <span>
                    Last seen {moment(sdkInfo.lastSeenDate).fromNow()}
                  </span>
                </Styled.SdkInfoRow>
              ))}
            </Styled.SdkRow>
          ))}
      </Styled.Content>
    </Styled.Container>
  )
}

export default DashboardView
