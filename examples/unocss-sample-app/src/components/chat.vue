<script setup lang="ts"></script>

<template>
  <div>
    <div class="w-full">
      <div class="chat chat-start">
        <div class="chat-bubble">
          It's over Anakin,
          <br />
          I have the high ground.
        </div>
      </div>
      <div class="chat chat-end"><div class="chat-bubble">You underestimate my power!</div></div>
    </div>

    <div class="w-full">
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/pig.jpg" />
          </div>
        </div>
        <div class="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/pig.jpg" />
          </div>
        </div>
        <div class="chat-bubble">It was you who would bring balance to the Force</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/pig.jpg" />
          </div>
        </div>
        <div class="chat-bubble">Not leave it in Darkness</div>
      </div>
    </div>

    <div class="w-full">
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/pig.jpg" />
          </div>
        </div>
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/pig.jpg" />
          </div>
        </div>
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble">I hate you!</div>
        <div class="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>

    <div class="w-full">
      <div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hours ago</time>
        </div>
        <div class="chat-bubble">You were my brother, Anakin.</div>
        <div class="chat-footer opacity-50">Seen</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hour ago</time>
        </div>
        <div class="chat-bubble">I loved you.</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
    </div>

    <div class="w-full">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-secondary">
          Put me on the Council and not make me a Master!??
        </div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-accent">
          That's never been done in the history of the Jedi. It's insulting!
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
      </div>
    </div>
  </div>
</template>
