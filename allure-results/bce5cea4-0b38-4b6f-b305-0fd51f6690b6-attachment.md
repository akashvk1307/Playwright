# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowsHandling.spec.js >> Windows Handling with promise new window
- Location: tests\windowsHandling.spec.js:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@class=\'btn btn-primary\']').first()
    - locator resolved to <button onclick="newwindow()" class="btn btn-primary">click</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    22 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [aria-hidden] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#Tabbed"
          - text: Open New Tabbed Windows
      - listitem [ref=e49]:
        - link [ref=e50]:
          - /url: "#Seperate"
          - text: Open New Seperate Windows
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Multiple"
          - text: Open Seperate Multiple Windows
    - generic [ref=e53]:
      - paragraph [ref=e54]:
        - text: If you set the target attribute to "_blank" , the link will open in a new browser window or a new tab
        - link [ref=e55] [cursor=pointer]: Compare Browsers
      - link [ref=e59]:
        - /url: http://www.selenium.dev
        - button [ref=e60] [cursor=pointer]: click
  - generic [ref=e62]:
    - insertion [ref=e65]:
      - iframe [ref=e67]:
        - iframe [ref=f2e1]:
          - generic:
            - generic [ref=f9e1]:
              - generic [ref=f9e2]:
                - generic:
                  - generic [ref=f9e3] [cursor=pointer]
                  - button [ref=f9e8] [cursor=pointer]
              - insertion [ref=f9e16]:
                - generic [ref=f9e17]:
                  - link [ref=f9e18]:
                    - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=C5wzZI1DTaua1MOn14-EP6f7B0Aeg3f_iiAHW7I3_oBX2lfTpyQEQASCPvrcvYOWS6IPYDqABi-KKoAHIAQmoAwHIA5sEqgSIAk_Q4GntGi-7mkfhn54Nud_t6-fVAwkNYMLr_7fXuzGgw0mJJXMSWZ19_rQvchDYFjyC3LMkI-CS1tetumHHoo5eED8BPYh7mFQ_lDslzLfQdDuxdlvy9fO5APjk1IbfHj1iWUbRcVsxIzRdOd9hgJRQpnMWLp1PfIe7Gv-3A5XI4UyoqRr-nbuSRGU47iM9OThy9H5UKgW3euUglwVi39AcEJ3Sf3gUwIcmBjp_D5ESN_v-KOJya8lfNfWmA39YIo8a4o1Me32vuKYMfrOObVKvI0ntDBv_XHAj3FkEL1gv8afyD6uQX9SHykaClMamy1LcfXcIafTKjGIXceOet9rpZD-wfb8lO8AE7LealKUF4AQDiAWR-KqXVJAGAaAGTYAH3Z313wKoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMeR2IzuwJcDYAGACgGYCwHICwGADAGiDAwqCgoIjt-xApXisQKqDQJJTuoNEwiV19iM7sCXAxXp-jgGHWl_EHrwDQGIDgmwE7aR4SXIE_vm_eUD0BMA2BMKiBQB2BQB0BUByhYCCgD4FgGAFwGyFxAYAioKNjYzODYzMzU0N1AG6BcFqhgXCQAAAAD4sBBBEgo2NjM4NjMzNTQ3GAGyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQSnwIAQM4h3OcoKPPyEkzO9B-3qJX3B4_2vhHViYR0oxyzvQ-eExPksyyPTBhpVRHh1hC5oWM-AOkBHi788htmhT9y7bEl5T-yEWrXTSWG7zweHjcRdq45X1tUne2rEh9thffjKjMrKpzySLXJDagVanak3sKPLIdZO_3B21RQ2U_yRpvGzHeNDh628mhb9kLWhTe6SdWO-EJiCFwEQGOZ45R9lhfP7aXQpkmP7IkxlgPinnH-X6Pwd28o2TCjl4iMPkGdv8RawDyGklAYbskcCFgEFA9wJtDmchOMmoDXW_PUOwcF9wrqxqvc30x9c0HtwGcYhmFg_Hw9I_NEw2rKMzyHf6QvpWR3iLi-OJ_nLo8oDxuAtqaqILqlG99AZfrx0RgB&sig=AOD64_2XHecF05cp60Rvx6g-Moe2hdClQA&dbm_c=AKAmf-DW6ixrElOlH-yF5C7j6zbf-Hz90miox2-X1fdkDyEOr5q6pLXeho8jhcryBmf-QzBVrbUAW4mOIPJtrWDj9aEQPHcKYX-a8SMTXAWAAGtyr3BSuOlLh9b6HKCx2_Mvks_8BkQ2kusEgnBY3p8JpkGXmhAh1tFLzoWZ0X51K0-RkYPQZ_-mfChgHpLb_MmrmvAlJzrU2sHXclrXSpbePy6sMTbo511X4LnsPMIflLNauWQczqDEjUMsB6L7AfztCk8jFXViXOxKi9yIoYAy1-ltMU-G4-uUH3T_h_63Z7w1MfRmc4uvhbD8mwBjahLTXXGgG6-Z&cry=1&dbm_d=AKAmf-BugESllJwQRWDuPPmD1fxQCHqd4oT2iwq-JkZCXkzQEV6WMkXJpqeYUgNTNdbIJ95flfRgIgdnTGkEjyCp9kS4NCheC5N4Aw1gFUuHaC_Sb6sXx-SjauKiFw1JLC-NMxcjPyYmHtLevLzDk3S9y4jY9viWpx3802ijvT2e5OUqtOQMfncOt78q7htqGUXqKY5hFUuMbTwA6bptjW9zzjoN47OHX0h3e8hc5-30uvtsAISBbh1en1u0OnykP7nOetkKFELx8_maBis7UOhbKrCDafyOpibUhwqwGZiK6jONx7ZtjhfeEGOZgLscwbm4W7OvaF2HIKd6865VhLyVVhF0skqQA05CHOUjoG8l3-9mnotiCwWeEVe-Qs-tak024cbi0CFx4NeAEHNZeT64BW9z17U2TB299LMn7u09OG7y1v2Aq4F9NWTbqM9kPUKTJ5UiO9u3kxDCzknV77u8zhCPuTxSGccpkGtbgaQHGWXl-zyMYNNoLcVQVJ_kHCkDrZVGw9RU1Vafm6nDyswBxOzMky0ff9ufdLu75hHOPCIXkFaXm7p03aaXnEsp4bqQovU0WA2OFEmJrBUvlgIG2kvYa6uDVNB14k3Q-QWAp-Mu_0u_GaGpvtc5JPW8wX29LCiKYf9NqrXdvz_e69522fRvW8ANG1oFZFcP1kV91rbRtuLNlYMD7qBe5E7xpQptv0PdwTkuEUsoJe4KZMb43yRGYtR8jIB6UdqmeB53PqmY35OO6-o&adurl=https://servedby.flashtalking.com/click/7/296969;10263001;4919222;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gkisOOpwbPK_B6M9-UJ1C4&ft_impID=20E8CBA5-2509-7B9C-C65A-95D434CFF5B6&ft_section=22597516305&g=6864DF42AD569C&random=98913.45787378181&ft_width=160&ft_height=600&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                    - img "Click Here" [ref=f9e19]
                  - link [ref=f9e21]:
                    - /url: https://www.flashtalking.com/consumer-privacy
                    - img "AdChoices arrow" [ref=f9e22]
                  - link "Privacy Notification" [ref=f9e24]:
                    - /url: https://www.flashtalking.com/consumer-privacy
            - iframe
    - insertion [ref=e70]:
      - generic [ref=e73]:
        - heading [level=2] [ref=e75]: Discover more
        - link [ref=e76] [cursor=pointer]:
          - generic [ref=e77]: Software Testing Tools
        - link [ref=e81] [cursor=pointer]:
          - generic [ref=e82]: Automation Testing Services
        - link [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: Automation Training Courses
        - link [ref=e91] [cursor=pointer]:
          - generic [ref=e92]: Selenium WebDriver Tutorials
        - link [ref=e96] [cursor=pointer]:
          - generic [ref=e97]: Window Handle Solutions
        - link [ref=e101] [cursor=pointer]:
          - generic [ref=e102]: Browser Window Management
        - link [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: Web Application Testing
        - link [ref=e111] [cursor=pointer]:
          - generic [ref=e112]: Test Automation Frameworks
    - insertion [ref=e118]:
      - iframe [ref=e120]:
        - iframe [ref=f4e1]:
          - generic:
            - generic [ref=f11e1]:
              - generic [ref=f11e2]:
                - generic:
                  - generic [ref=f11e3] [cursor=pointer]
                  - button [ref=f11e8] [cursor=pointer]
              - insertion [ref=f11e16]:
                - generic [ref=f11e17]:
                  - link [ref=f11e18]:
                    - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CM8xkI1DTasy7MODdg8UP3a_l2Amg3f_iiAHW7I3_oBX2lfTpyQEQASCPvrcvYOWS6IPYDqABi-KKoAHIAQmoAwHIA5sEqgSLAk_Q1fVWXmcpd3U5gXFuqJNfDQ_OC_XotLeY8vMgOrrE-YP_4RcyBIsh2BGGHUd76vQRWV155_EG470pVfSbWfhv83WBcOH8NPe-56ClxCO-GmEs9Oo-cGT8rk8Vf4QKc_dv-0QF53AeoD1vzjcBP-M9qh0OJa3s0rYKBqU0ecmTsnkUNiNTrPRn-MufF7XDsgT3epmzY0k8LdKXhV74MgLARib2uKQveBOgp7nEPmqFabPeFAOgNbq2eag0VSAFmOGdeTk3RxjvRa3F_n-uXceqhOjqkIwzmUNMxzs3GkkJ8nRCiyx1iJ66r3_d4ripwc7BXd_aRfh084HEhtq_H0zkKwHnrn9KF_GR5sAE7LealKUF4AQDiAWR-KqXVJAGAaAGTYAH3Z313wKoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WP6q2IzuwJcDYAGACgGYCwHICwGADAGqDQJJTuoNEwjV3diM7sCXAxXg7qACHd1XGZvwDQGIDgmwE7aR4SXIE_vm_eUD0BMA2BMKiBQB2BQB0BUByhYCCgD4FgGAFwGyFxAYAioKNjYzODYzMzU0N1AG6BcFqhgXCQAAAAA8qhBBEgo2NjM4NjMzNTQ3GAGyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQSngIAQM4h3OBEkWVCttOScw7S9f5cT3xUf-STbmY9LaG2r7BTdJNCr7E-x8x7q1CIxt0qaPX8cUbZkX1msVnMikk1ZU87ZZMIpwBSLXnb2yOc4AyVizRSao4Nd3N6IXqZ6cVaQxX-3UP7SkU7bkZIQRkcyin1etkqvp4yulCXXlcTHfXvWbxOEd1lqVgeOdHGogC2bmCz7O-u81e6Dk7siXcPN_b3XiRYIrW_0X6S9f4QMU427HDIMkx4X2TOkWJlDpld__P6J7QbBXJNtiyfOcFGpI001nnV2-dXqXLcHHNlUpKp5GWgrc2miJ2p8Izb3e0P0EeycmpG_3YiVlA7aN7MsrqYAp4Ldxz8NuWvcDI2TVOKrpYNtcg3yU0_I-LtGAE&sig=AOD64_0_pGoTaCn_fnHJJ_2ltAZR068aRQ&dbm_c=AKAmf-DS_qDRuVbXkPFNAFZPDv7MxmmCANCFKei0gwkhcgvYGeF0QKBxYsvjhECunpdUNdN3iWGYujjz8fWssyu-iaEadEiqusA5yi6xfmiPjvMW2mQ3pEPbQ3snkr9e67ZaNi5_rSwxAXC2TK2BxwvVdiJNMIoJsvIN6k2vdDG5JLO3N9ClidzCh5b1kI7sIBzas5efriTURlL7xO5WL_Pauk8AqS84Bk6NJpIKLkB-N8JfM6F5XlNR-bWfEaF7WE8dk4UueZcIse0lUMq9CllvtIHeOVbogqWF72ijSq7WpgNYZXsF_-9kk5yAGebUDMZoLNjwVjIj&cry=1&dbm_d=AKAmf-DsNjwMhEXFGTBMTPM6IdXytYtLkmcW-tskdblxkyxIwML4PWoBCdo8rcQMDim4IhXyjHxzmf3Hp4JtDrHxb9z9VXU5H1YBZ6ZcmfPzyvIosS7hP5A0F33Vq-YKca6v5z4_R8koqHbrtO5jl-XJr1-ebZhn4tQiwHD25uGVDv22vQFaymmE5aD9SP3eQLgj2YGOgB9t9BwEZqTPof31yWcjmTOCD24JIna8tcJzZ0H803VQv6d5ysyFk4F2NuH5IfGBXjHuaJKVOLcxATTjCi09oCYqULPY2898mvlV9tVZ7vm__sRT_uNepka0rf5LlL20jBGhZ2j15zTBc77D9HFgBDK_pFOZgTI0vVJp_DpwphVjsPipaNpOW__aWGwPWsNwnja90QyMCjxNR8QqT3Ozq2Kfnq7jZMiwUlnKnIUd2EyaqA62_7o5tGR0RSyS0hBYo_zp0voiTsq3MR7iq10VMYqNa2Odyg1yHkG-GsBV3-Wq5zACATtaCLneyL1C-mGC3dajF4aHG36V8mGYEaua_WXgApwvU9hH2ve-YKdy0jTft1JU0BhIu7ah8nqvbBjKs40T9k-4E75iXpd-RquvD97AizIVXvGtszwkToRoJDSpkV1ZkPXyKUsKN7VzLd1S4aF_4cAkydjm9ZCvGTtNhtm0x_gzOuq-9Ct4jAl2f1RNfaZIHfN-r9JRqYHtJK3SUq8uNdv22zuLPAjx_i5vknXUOKkji7lSLEU4JZ4z47oQV2U&adurl=https://servedby.flashtalking.com/click/7/296969;10263001;4919258;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gip7uQZrfo_zUzAYOBlNMr&ft_impID=B8D3C975-D860-EB84-B34D-5A5B6E12E7D0&ft_section=22597516305&g=68644517007DCD&random=686462.4274103342&ft_width=160&ft_height=600&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                    - img "Click Here" [ref=f11e19]
                  - link [ref=f11e21]:
                    - /url: https://www.flashtalking.com/consumer-privacy
                    - img "AdChoices arrow" [ref=f11e22]
                  - link "Privacy Notification" [ref=f11e24]:
                    - /url: https://www.flashtalking.com/consumer-privacy
            - iframe
    - insertion [ref=e123]:
      - iframe [ref=e125]:
        - iframe [ref=f5e1]:
          - generic:
            - generic [ref=f7e1]:
              - generic [ref=f7e2]:
                - generic:
                  - generic [ref=f7e3] [cursor=pointer]
                  - button [ref=f7e8] [cursor=pointer]
              - insertion [ref=f7e16]:
                - generic [ref=f7e17]:
                  - link [ref=f7e18]:
                    - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CzTFPI1DTav-yML234-EP0rrTsAmg3f_iiAHW7I3_oBX2lfTpyQEQASCPvrcvYOWS6IPYDqABi-KKoAHIAQmoAwHIA5sEqgSLAk_Q9By5b_kPfeZl2dRNv7IPquRVznDQTU2i7uDgfeGkL6IZCpw-40gFomYxkTVUPt0DoCAbgjLCa8sTbvm5G8y2ibc0NO61OxYXwPuj7dMNKgs1NHKyhQd3tLJ7U7TKQWCZmKzAnCorpWsy0TFDVwHzCy2R_oGSRWJZAJHbTm6G9O0KeP1KrSvvuojh98FvgunAc0uthXRLxW-WuHuOcibC-UYN3tItzMV7Nch2KrC3337BRrsVBxFYTWiLDpNEgl_sapGkhsNvj2MruBD6T5Sy3fA4zpdCWlIo4S-INpdgIoludNHuN1wEI8Pmkdad6bkz1pd-3w_IsIfVOnmTZI4OI7AaPnFMgOUq7cAE7LealKUF4AQDiAWR-KqXVJAGAaAGTYAH3Z313wKoB6fMsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WK-e2IzuwJcDYAGACgGYCwHICwGADAGqDQJJTuoNEwjF1NiM7sCXAxW92zgGHVLdFJbwDQGIDgmwE7aR4SXIE_vm_eUD0BMA2BMKiBQB2BQB0BUByhYCCgD4FgGAFwGyFxAYAioKNjYzODYzMzU0N1AG6BcFqhgXCQEAAADgzA9BEgo2NjM4NjMzNTQ3GAGyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQSngIAQM4h3Md3Eu20cTpKu5ozSKCrWDqYynXQmcvkpb5pNmVDxxu-_j_ploWl7Wd7GZN_K7x3amHHAYguoL_6J9B6Ze-vS_-v4Gdny5GhPx0Zu2UkmKU7PzXrosoBYItwDRhuyy6U2gPLkwzBs0YryuMkAaiU5xxT7JLIk9Np-0HSXZbPyS3VxhOO_b5MK7Iz1i7jqWSbZdiY2HZzOF3r0x8IuApiea8sjqImpu3juEs5jKG_u7qaPDeL_iaWC2AeHaqgmkRPRXsZ4ips4w_0nAFBihaiaga8a0R-t6upbCPJLNxhjJjUMZXTP_5bvyZNldq6Dwf5hLQgKHjVE2SUbQMDDSh5Lra-n2_hf-_Eo0_cf6rPSiVOjoR4abey1G4tGAE&sig=AOD64_28kOjINbl2fyHpWiXyFbs3F5XX7g&dbm_c=AKAmf-CJBgLdxs61tZNKD05_MxxP-h0_qFU3JFVbFrM_3AM8cjRWYTmRhYS2rta4SgjDjbNE4KUXJZeKBvwAS2sy1DGf2VmzeWkM_aYlRUMw3rN1noepubwemO1g8R8_4HBZCz5zXp0NZuoaBD79f4sqbqrQ8vycMPR15PRIuMYxQWDLccHGAoSRuc13XaJ3_PZnfu2xQJOvMlaNEQa896jv7lFopmpqQ_QAywYBPUDqPgYVAkbf96utx3jfJOU0hdGHSPmriZbZz91DBaEk7rEadEV8duG1QRbSFD100M0RwuEVYZjvFqwAleVdFd-j3A1zvBb41pA5&cry=1&dbm_d=AKAmf-AtUvo3MOJeZp-dAs3992WbuXja2EO6A3Mxhpb-Fxj6269cO4HKIzpByyn9PoWNsF6fMVLxYaJy-UaBwuFvv6Y2RPo-FX4s2tXJXlnItCAMM_utYQHX9hkP6gfRjpJxxZsGoQo890F4h1AAlUxS9myU0uay5h0vSrJXzrFieU3Bba_8eV6TFOIQroGCKOk-fqJhJyf-bJiV6-DamX_ZA9uXN5q0e1E4iHIiGz4SfMn-pl9oUWpNnvEb3rPwRnToC-nnEBIvux2lpLQAb7YSWVH4OMeMaLDj6ZqXONA8-ymgluzrPa8Lzqc0fEexDocM7zcRz5r-TC3CcNM3ja50CyCMZs9FLW-dsKznKIgWfdjceNPcneNmnI3Jo1p2a-FKEHZdpqD6zivEqgqzDHIEQmV3mzJ7Vbz5XZbEHXB40XgbM-VxuKpB7TGa8lsC_BfyRydBkF4xknIHZgz_NVbp1MoKyNcJKVhRQsGrgHJO6yjNCHN-NEApeWhnF_SjbalNnWoxFYbm8EKNWQzZ7Serz73oeSEnNO9ZLWlb2nCdP3rH_3OZRp_8_CzukqiUyfZU_mpVWpup6etKQtjN0e7AkVwIK7t6Zig1npg0UfvN9lm75iPTDon0tF8EX5LNNjKVgeGDO9aY1zobVTc-41XtDCImYFDLq1dWT-VJOcva-MbCOFg39FANKhvMlSW7Chy4Tq79xlJaGcDq-i4edpLmSA_dJ2eMoW8Yje3cRN7uQxtvRZCeWg4&adurl=https://servedby.flashtalking.com/click/7/296969;10263001;6099002;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jqSofOphlGTeWw-eYiY-67&ft_impID=F32EE6A0-A899-0C5C-2008-EF927BAD8C9D&ft_section=22597516305&g=68644C11968E0C&random=729163.126604292&ft_width=160&ft_height=600&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                    - img "Click Here" [ref=f7e19]
                  - link [ref=f7e21]:
                    - /url: https://www.flashtalking.com/consumer-privacy
                    - img "AdChoices arrow" [ref=f7e22]
                  - link "Privacy Notification" [ref=f7e24]:
                    - /url: https://www.flashtalking.com/consumer-privacy
            - iframe
    - contentinfo [ref=e127]:
      - generic [ref=e129]:
        - generic [ref=e130]:
          - text: "\"@ 2016\""
          - link [ref=e131]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e132]:
          - link [ref=e133]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e134]: 
          - link [ref=e135]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e136]: 
          - link [ref=e137]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e138]: 
          - link [ref=e139]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e140]: 
          - link [ref=e141]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e142]: 
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | //Open New Tabbed Windows
  4  | test("Windows Handling", async ({ page }) => {
  5  |   await page.goto("https://demo.automationtesting.in/Windows.html");
  6  |   let newTab = page.waitForEvent("popup");
  7  |   await page.locator("//button[@class='btn btn-info']").first().click();
  8  |   let selenium = await newTab;
  9  |   await selenium.locator("//a[@href='/downloads']").click();
  10 | });
  11 | 
  12 | //Open New Tabbed Windows with Promise
  13 | test("Windows Handling with promise", async ({ page }) => {
  14 |   await page.goto("https://demo.automationtesting.in/Windows.html");
  15 |   let [newPage] = await Promise.all([
  16 |     page.waitForEvent("popup"),
  17 |     page.locator("//button[@class='btn btn-info']").first().click(),
  18 |   ]);
  19 |   await newPage.locator("//a[@href='/downloads']").click();
  20 | });
  21 | 
  22 | //Open New Windows with Promise
  23 | test("Windows Handling with promise new window", async ({ page }) => {
  24 |   await page.goto("https://demo.automationtesting.in/Windows.html");
  25 |   await page.locator("//a[@href='#Seperate']").click();
  26 |   let [newPage] = await Promise.all([
  27 |     page.waitForEvent("popup"),
> 28 |     page.locator("//button[@class='btn btn-primary']").first().click(),
     |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 |   ]);
  30 |   await newPage.locator("//a[@href='/downloads']").click();
  31 | });
  32 | 
```