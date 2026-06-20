// eslint-disable-next-line
import React, { useState } from 'react';

export default function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Alert',
      title: 'Attendance Shortage Warning',
      message: 'Your attendance for Advanced Web Development is below 75%. Please contact your mentor immediately to resolve registration status.',
      time: '10 mins ago',
      isRead: false,
      accentColor: '#ef4444', 
      glowShadow: '0 0 20px rgba(239, 68, 68, 0.25)',
      badgeBg: 'rgba(239, 68, 68, 0.15)',
      icon: '⚠️'
    },
    {
      id: 2,
      type: 'Exam',
      title: 'Term-End Examination Schedule Out',
      message: 'The formal timetable for the upcoming semester examination cycles has been locked. Download the verified portal PDF sheet.',
      time: '2 hours ago',
      isRead: false,
      accentColor: '#3b82f6', 
      glowShadow: '0 0 20px rgba(59, 130, 246, 0.25)',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      icon: '📅'
    },
    {
      id: 3,
      type: 'Placement',
      title: 'New Corporate Mock Interview Drive',
      message: 'A simulation matrix training session for technical recruitment rounds is active for tomorrow 11:00 AM at Seminar Block B.',
      time: '1 day ago',
      isRead: true,
      accentColor: '#10b981', 
      glowShadow: 'none',
      badgeBg: 'rgba(16, 185, 129, 0.1)',
      icon: '💼'
    },
    {
      id: 4,
      type: 'System',
      title: 'Identity Profile Verification Completed',
      message: 'Your student ledger profile metrics and cloud database files have been authenticated by the administrative server board.',
      time: '3 days ago',
      isRead: true,
      accentColor: '#a855f7', 
      glowShadow: 'none',
      badgeBg: 'rgba(168, 85, 247, 0.1)',
      icon: '⚙️'
    }
  ]);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredAllBtn, setHoveredAllBtn] = useState(false);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 10%, #0f172a 0%, #030712 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      color: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '920px',
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        padding: '36px',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        
        {/* Silicon Valley Header Console */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          paddingBottom: '24px',
          marginBottom: '32px',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <div>
            <h1 style={{
              fontSize: '30px',
              fontWeight: '800',
              color: '#ffffff',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              letterSpacing: '-0.5px'
            }}>
              <span>System Operations Console</span>
              {unreadCount > 0 && (
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '5px 12px',
                  borderRadius: '30px',
                  letterSpacing: '0.75px',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {unreadCount} PENDING ACTION
                </span>
              )}
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', fontWeight: '400', letterSpacing: '0.1px' }}>
              Real-time enterprise intelligence logs, academic core indicators, and dynamic priority tracking queues.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              onMouseEnter={() => setHoveredAllBtn(true)}
              onMouseLeave={() => setHoveredAllBtn(false)}
              style={{
                backgroundColor: hoveredAllBtn ? '#3b82f6' : 'transparent',
                border: hoveredAllBtn ? '1px solid #3b82f6' : '1px solid rgba(59, 130, 246, 0.4)',
                color: hoveredAllBtn ? '#ffffff' : '#60a5fa',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '13px',
                padding: '9px 18px',
                borderRadius: '10px',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: hoveredAllBtn ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              Flush All Queues
            </button>
          )}
        </div>

        {/* Matrix Notification Grid Stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {notifications.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 20px', color: '#475569' }}>
              <p style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '0.5px' }}>SYSTEM CLEAR: No active threads detected.</p>
            </div>
          ) : (
            notifications.map((notif) => {
              const isCurrentHovered = hoveredCard === notif.id;
              
              return (
                <div
                  key={notif.id}
                  onMouseEnter={() => setHoveredCard(notif.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    position: 'relative',
                    backgroundColor: notif.isRead 
                      ? 'rgba(15, 23, 42, 0.2)' 
                      : isCurrentHovered 
                        ? 'rgba(30, 41, 59, 0.65)' 
                        : 'rgba(30, 41, 59, 0.35)',
                    opacity: notif.isRead ? 0.4 : 1,
                    border: '1px solid',
                    borderColor: !notif.isRead 
                      ? isCurrentHovered 
                        ? notif.accentColor 
                        : 'rgba(255, 255, 255, 0.06)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    borderLeft: !notif.isRead ? `4px solid ${notif.accentColor}` : '1px solid rgba(255, 255, 255, 0.02)',
                    boxShadow: !notif.isRead && isCurrentHovered ? notif.glowShadow : 'none',
                    transform: !notif.isRead && isCurrentHovered ? 'translateX(4px)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
                    
                    {/* Content Group Layout */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left', flex: 1 }}>
                      
                      {/* Metric Tag Row */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.75px',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          backgroundColor: notif.badgeBg,
                          color: notif.accentColor,
                          border: `1px solid ${notif.accentColor}25`
                        }}>
                          {notif.type}
                        </span>
                        <span style={{ fontSize: '12px', color: '#475569', fontWeight: '500' }}>{notif.time}</span>
                      </div>

                      {/* Log Message Block */}
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: notif.isRead ? '#64748b' : '#ffffff', 
                        margin: '4px 0 2px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{ fontSize: '18px' }}>{notif.icon}</span>
                        <span>{notif.title}</span>
                      </h3>
                      
                      {/* High Contrast Messaging Text */}
                      <p style={{ 
                        fontSize: '14px', 
                        color: notif.isRead ? '#475569' : '#cbd5e1', 
                        margin: 0, 
                        lineHeight: '1.6', 
                        fontWeight: '400',
                        letterSpacing: '0.15px'
                      }}>
                        {notif.message}
                      </p>
                    </div>

                    {/* Operational Action Button */}
                    {!notif.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(notif.id)}
                        onMouseEnter={() => setHoveredBtn(notif.id)}
                        onMouseLeave={() => setHoveredBtn(null)}
                        style={{
                          padding: '10px 20px',
                          fontSize: '12px',
                          fontWeight: '700',
                          color: hoveredBtn === notif.id ? '#ffffff' : notif.accentColor,
                          backgroundColor: hoveredBtn === notif.id ? notif.accentColor : 'transparent',
                          border: `1px solid ${notif.accentColor}`,
                          borderRadius: '10px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          boxShadow: hoveredBtn === notif.id ? `0 0 15px ${notif.accentColor}66` : 'none',
                          transition: 'all 0.2s ease',
                          alignSelf: 'center'
                        }}
                      >
                        Acknowledge
                      </button>
                    )}
                  </div>

                  {/* Operational Radar Pulse Indicator */}
                  {!notif.isRead && (
                    <span style={{
                      position: 'absolute',
                      top: '26px',
                      right: '26px',
                      height: '6px',
                      width: '6px',
                      backgroundColor: notif.accentColor,
                      borderRadius: '50%',
                      boxShadow: `0 0 10px 2px ${notif.accentColor}`
                    }}></span>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}