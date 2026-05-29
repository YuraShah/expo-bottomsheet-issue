import React, { Fragment, useRef, useState } from 'react'
import type { ModalBottomSheetRef } from '@expo/ui/jetpack-compose';
import { Text, ScrollView } from 'react-native';
import { Host, ModalBottomSheet, RNHostView } from '@expo/ui/jetpack-compose';
import MoreVertAndroid from '@expo/material-symbols/more_vert.xml';
import PublicAndroid from '@expo/material-symbols/public.xml';
import { Stack } from 'expo-router';

export default function BottomSheetComponent() {
   const [isPresented, setIsPresented] = useState(false); const sheetRef = useRef<ModalBottomSheetRef>(null);

   return (
      <Fragment>

         <Text>Text</Text>

         <Stack.Toolbar placement="right">
            <Stack.Toolbar.Menu
               icon={MoreVertAndroid}
               iconRenderingMode="template"
            >
               <Stack.Toolbar.MenuAction
                  icon={PublicAndroid}
                  onPress={() => setIsPresented(true)}
               >
                  News
               </Stack.Toolbar.MenuAction>

            </Stack.Toolbar.Menu> </Stack.Toolbar>

         {isPresented && (
            <Host matchContents>
               <ModalBottomSheet
                  ref={sheetRef}
                  onDismissRequest={() => setIsPresented(false)}
               >
                  <RNHostView>
                     <ScrollView>
                        <Text style={{fontSize: 20}}>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ullam eius at alias laboriosam cumque natus illum blanditiis magnam, officiis, suscipit similique error impedit eaque maiores quisquam. Dolorem voluptatibus magni asperiores recusandae incidunt aperiam ipsam quia veritatis vel explicabo eaque adipisci rem dolor, iusto facere sint quisquam, sapiente tempore sed quod labore ut. Facere reprehenderit cumque in cum laborum mollitia earum maiores consequatur quis animi eum nesciunt neque quasi exercitationem ullam quia atque itaque aperiam, quas ab distinctio? Ratione suscipit porro accusantium esse excepturi cum dolorem maxime quasi, nobis impedit officia voluptas ut deleniti, fugiat voluptatum aut! Corrupti totam, delectus error veniam aliquam sapiente nam odit suscipit hic eos. Nostrum, iure aspernatur? Nihil quo dolor similique fugit, optio sit adipisci rerum dignissimos ipsam sequi quidem voluptatibus enim saepe architecto, at excepturi facere rem, animi id est doloribus aliquid! Optio unde voluptate dolor inventore rem sapiente officiis quasi culpa aut et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ullam eius at alias laboriosam cumque natus illum blanditiis magnam, officiis, suscipit similique error impedit eaque maiores quisquam. Dolorem voluptatibus magni asperiores recusandae incidunt aperiam ipsam quia veritatis vel explicabo eaque adipisci rem dolor, iusto facere sint quisquam, sapiente tempore sed quod labore ut. Facere reprehenderit cumque in cum laborum mollitia earum maiores consequatur quis animi eum nesciunt neque quasi exercitationem ullam quia atque itaque aperiam, quas ab distinctio? Ratione suscipit porro accusantium esse excepturi cum dolorem maxime quasi, nobis impedit officia voluptas ut deleniti, fugiat voluptatum aut! Corrupti totam, delectus error veniam aliquam sapiente nam odit suscipit hic eos. Nostrum, iure aspernatur? Nihil quo dolor similique fugit, optio sit adipisci rerum dignissimos ipsam sequi quidem voluptatibus enim saepe architecto, at excepturi facere rem, animi id est doloribus aliquid! Optio unde voluptate dolor inventore rem sapiente officiis quasi culpa aut et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ullam eius at alias laboriosam cumque natus illum blanditiis magnam, officiis, suscipit similique error impedit eaque maiores quisquam. Dolorem voluptatibus magni asperiores recusandae incidunt aperiam ipsam quia veritatis vel explicabo eaque adipisci rem dolor, iusto facere sint quisquam, sapiente tempore sed quod labore ut. Facere reprehenderit cumque in cum laborum mollitia earum maiores consequatur quis animi eum nesciunt neque quasi exercitationem ullam quia atque itaque aperiam, quas ab distinctio? Ratione suscipit porro accusantium esse excepturi cum dolorem maxime quasi, nobis impedit officia voluptas ut deleniti, fugiat voluptatum aut! Corrupti totam, delectus error veniam aliquam sapiente nam odit suscipit hic eos. Nostrum, iure aspernatur? Nihil quo dolor similique fugit, optio sit adipisci rerum dignissimos ipsam sequi quidem voluptatibus enim saepe architecto, at excepturi facere rem, animi id est doloribus aliquid! Optio unde voluptate dolor inventore rem sapiente officiis quasi culpa aut et!
                        </Text>
                     </ScrollView>
                  </RNHostView>
               </ModalBottomSheet>
            </Host>
         )}
      </Fragment>
   )
}
